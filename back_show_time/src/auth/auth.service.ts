import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UpdateAuthDto } from './dto/updateAuth.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  update(_id: string, UpdateAuthDto: UpdateAuthDto) {
    return this.userModel.updateOne({ _id }, { $set: { ...UpdateAuthDto } });
  }

  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  /*async updateP(_id:string, UpdateAuthDto: UpdateAuthDto) : Promise<void> {
    const { password } = UpdateAuthDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const UserP = new this.userModel({
      password: hashedPassword,
    });
    try {
      await UserP.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Password already exists');
      }
      throw error;
    }
  }*/

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    // eslint-disable-next-line prettier/prettier
    const { email, password, firstName, lastName, phoneNumber, uRole } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      uRole
    });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signIn(user: User) {
    const payload = { email: user.email, sub: user.uRole };
    return {
      accessToken: this.jwtService.sign(payload),
      _id: user._id,
      uRole: user.uRole,
    };
  }

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (valid) {
      return user;
    }

    return null;
  }

  async findOne(_id: string) {
    return this.userModel.findOne({ _id });
  }

  async findAll() {
    return this.userModel.find();
  }

  async remove(_id: string) {
    return this.userModel.deleteOne({ _id });
  }
}

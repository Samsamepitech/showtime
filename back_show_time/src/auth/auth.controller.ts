import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
  ValidationPipe,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UpdateAuthDto } from './dto/updateAuth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    // return await
    try {
      this.authService.signUp(authCredentialsDto);
    } catch (error) {
      console.log(error);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }

  @Put('update/:_id')
  update(@Param('_id') _id: string, @Body() UpdateAuthDto: UpdateAuthDto) {
    return this.authService.update(_id, UpdateAuthDto);
  }

  /*@Put('updatep/:_id')
  updateP(@Param('_id') _id: string, @Body() UpdateAuthDto: UpdateAuthDto) {
    return this.authService.updateP(_id, UpdateAuthDto);
  }*/

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.authService.findOne(_id);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Delete('delete/:_id')
  async remove(@Param('_id') _id: string) {
    return this.authService.remove(_id);
  }
}

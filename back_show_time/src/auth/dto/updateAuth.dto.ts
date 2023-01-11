import { PartialType } from '@nestjs/mapped-types';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Hash } from 'crypto';

export class UpdateAuthDto extends PartialType(AuthCredentialsDto) {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be 10 characters' })
  @MaxLength(10, { message: 'Phone number must be 10 characters' })
  phoneNumber: string;
}

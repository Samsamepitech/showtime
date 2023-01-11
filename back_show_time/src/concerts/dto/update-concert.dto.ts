import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertDto } from './create-concert.dto';
import { IsNotEmpty, IsDate } from 'class-validator';

export class UpdateConcertDto extends PartialType(CreateConcertDto) {
  @IsNotEmpty()
  artist: string;

  @IsNotEmpty()
  tour: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  @IsDate()
  date: string;

  @IsNotEmpty()
  place: string;
}

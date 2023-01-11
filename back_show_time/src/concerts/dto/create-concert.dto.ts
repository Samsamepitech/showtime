import { IsNotEmpty } from 'class-validator';

export class CreateConcertDto {
  @IsNotEmpty()
  artist: string;

  @IsNotEmpty()
  tour: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  price: string;
}

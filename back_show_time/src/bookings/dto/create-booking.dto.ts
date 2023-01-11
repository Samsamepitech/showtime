import { IsNotEmpty } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  concert_id: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  tour: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  lastName: string;
}

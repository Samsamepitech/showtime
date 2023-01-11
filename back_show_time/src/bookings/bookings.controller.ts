import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { User } from 'src/auth/schemas/user.schema';
import { Concert } from 'src/concerts/schemas/concert.schema';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    try {
      this.bookingsService.create(createBookingDto);
    } catch (error) {
      console.log(error)
    }
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.bookingsService.findOne(_id);
  }

  @Get('/byuser/:author')
  findTicket(@Param('author') author: string) {
    return this.bookingsService.findTicket(author);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingsService.update(_id, updateBookingDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.bookingsService.remove(_id);
  }
}

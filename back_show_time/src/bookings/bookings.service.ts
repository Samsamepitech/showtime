import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
  ) {}

  async create(CreateBookingDto: CreateBookingDto): Promise<Booking> {
    const createdBooking = new this.bookingModel(CreateBookingDto)
    //await createdBooking.populate('concert_id');
    return createdBooking.save();
  }

  async findAll() {
    return this.bookingModel.find();
  }

  async findOne(_id: string) {
    return this.bookingModel.findOne({ _id });
  }

  async findTicket(author: string) {
    return this.bookingModel.find({ author });
  }

  async update(_id: string, UpdateBookingDto: UpdateBookingDto) {
    return this.bookingModel.updateOne(
      { _id },
      { $set: { ...UpdateBookingDto } },
    );
  }

  async remove(_id: string) {
    return this.bookingModel.deleteOne({ _id });
  }
}

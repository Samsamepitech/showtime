import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { User } from 'src/auth/schemas/user.schema';
import * as mongoose from 'mongoose';
import { Concert } from 'src/concerts/schemas/concert.schema';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Concert' })
  @Type(() => Concert)
  concert_id: Concert;

  @Prop()
  date: string;

  @Prop()
  type: string;

  @Prop()
  artist: string;

  @Prop()
  price: string;

  @Prop()
  tour: string;

  @Prop()
  place: string;

  @Prop()
  lastName: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {

  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  tour: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  place: string;

  @Prop({ required: true })
  price: string;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
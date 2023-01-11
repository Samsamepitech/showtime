import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './schemas/concert.schema';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel(Concert.name) private concertModel: Model<ConcertDocument>,
  ) {}

  async create(createConcertDto: CreateConcertDto): Promise<Concert> {
    return new this.concertModel(createConcertDto).save();
  }

  async findAll() {
    return this.concertModel.find();
  }

  async findOne(_id: string) {
    return this.concertModel.findOne({ _id });
  }

  async update(_id: string, updateConcertDto: UpdateConcertDto) {
    return this.concertModel.updateOne(
      { _id },
      { $set: { ...updateConcertDto } },
    );
  }
  async findType(type: string) {
    return this.concertModel.find({ type });
  }

  async remove(_id: string) {
    return this.concertModel.deleteOne({ _id });
  }
}

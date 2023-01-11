import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.concertsService.create(createConcertDto);
  }

  @Get()
  findAll() {
    return this.concertsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.concertsService.findOne(_id);
  }

  @Put(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return this.concertsService.update(_id, updateConcertDto);
  }

  @Get('/type/:type')
  findType(@Param('type') type: string) {
    return this.concertsService.findType(type);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.concertsService.remove(_id);
  }

}

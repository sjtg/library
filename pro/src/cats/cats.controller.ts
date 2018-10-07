import { Controller, Get, Post, Body, Put, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from '../dto/create.dto';
import { CatsService } from 'src/cats.service';
import { Cat } from '../interfaces/interface';



@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
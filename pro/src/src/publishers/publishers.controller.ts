import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreatePublisherDto } from '../../dto/create.dto';
import { PublishersService } from '../publishers.service';
import { Publisher  as PublisherInterface } from '../../interfaces/interface';
@Controller('publishers')

export class PublishersController {

	constructor(private readonly publisersService: PublishersService) {}

	  // Post New books 
  @Post()
  // @UsePipes(new ValidationPipe())
  async create(@Body() createPublisherDto: CreatePublisherDto) {
    this.publisersService.create(createPublisherDto);
  }

  @Get()
  async findAll(): Promise<PublisherInterface[]> {
    return this.publisersService.findAll();
  }
}
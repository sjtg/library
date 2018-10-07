import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { CreatePublisherDto } from '../../dto/create.dto';
import { PublishersService } from '../publishers.service';
import { Publisher } from '../../interfaces/interface';
@Controller('publishers')

export class PublishersController {

	constructor(private readonly publisersService: PublishersService) {}

	// Post Publishers 
	@Post()
	async create(@Body() createPublisher : CreatePublisherDto ){
		this.publisersService.create(createPublisher);
	}


	// Get all publishers 
	@Get()
	async findAll(): Promise<Publisher[]>{
		return this.publisersService.findAll();
	}


  // @Post()
  // create(@Body() createPublisherDto) {
  //   return 'This action adds a new publishers';
  // }

  // @Get()
  // findAll(@Query() query) {
  //   return `This action returns all publishers (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id) {
  //   return `This action returns a #${id} publishers`;
  // }

  // @Put(':id')
  // update(@Param('id') id, @Body() updatePublisherDto) {
  //   return `This action updates a #${id} publishers`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id) {
  //   return `This action removes a #${id} publishers`;
  // }
}
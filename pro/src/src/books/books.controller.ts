import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { CreateBookDto } from '../../dto/create.dto';
import { BooksService } from '../books.service';
@Controller('books')
export class BooksController {

constructor(private readonly booksService: BooksService) {}
 

  @Post()
  async create(@Body() book:string) {
  	this.booksService.create(book);
  }

  @Get()
  async findAll(): Promise<string[]> {
  	return this.booksService.findAll();
  }

   // @Post()
  // create(@Body() createBookDto) {
  //   return 'This action adds a new bo';
  // }

  // @Get()
  // findAll(@Query() query) {
  //   return `Action, Drama`;
  // }


   // @Post()
  // create(@Body() createBookDto) {
  //   return 'This action adds a new bo';
  // }

  // @Get()
  // findAll(@Query() query) {
  //   return `Action, Drama`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id) {
  //   return `This action returns a #${id} books`;
  // }

  // @Put(':id')
  // update(@Param('id') id, @Body() updateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id) {
  //   return `This action removes a #${id} book`;
  // }
}
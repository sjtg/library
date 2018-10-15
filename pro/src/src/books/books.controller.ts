import { Controller, Get, Post, Body , HttpStatus, Res, UseGuards} from '@nestjs/common';
import {SessionGuard} from '../../auth/SessionGuard';
import {SessionUser} from '../../users/user.decorator';
import { UserEntity} from '../../users/users.entity';
import { CreateBookDto } from '../../dto/create.dto';
import { BooksService } from '../books.service';
import { Book as BookInterface } from '../../interfaces/interface';
import { BooksEntity } from '../books/books.entity';
// import { ValidationPipe } from '../../commons/pipes';
@Controller('books')
export class BooksController {

constructor(private readonly booksService: BooksService) {}
  
    @Post('')
    @UseGuards(SessionGuard)
    public async createBooks(@Body() createBooks: CreateBookDto[], @Res() res, @SessionUser() user: UserEntity) {
        const books: BooksEntity[] = await this.booksService.createBooks(createBooks, user);
        return res.status(HttpStatus.OK).send(books);
    }
 
	// Post New books 
  @Post('')
  // @UsePipes(new ValidationPipe())

  async create(@Body() createBookDto: CreateBookDto) {
  	this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<BookInterface[]> {
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
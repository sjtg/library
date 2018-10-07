import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books.service'; 
import { Book } from 'src/books/books.entity';


@Module({
	imports : [TypeOrmModule.forFeature([Book])],
	controllers: [BooksController],
	providers: [BooksService],
	exports : [BooksService]


})
export class BooksModule {}

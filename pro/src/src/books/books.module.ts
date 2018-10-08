import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books.service'; 

import { booksProviders } from 'src/providers';
import { DatabaseModule } from 'database/database.module';
// import { BookSchema } from  '../../schema/all.schema';





@Module({
	
	imports: [DatabaseModule],
	controllers: [BooksController],
	providers: [BooksService, ...booksProviders],
	


})
export class BooksModule {}




// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Book } from 'src/books/books.entity';

// imports : [MongooseModule.forFeature([{ name : 'Book', schema: BookSchema}])],

// @Module({
// 	imports : [TypeOrmModule.forFeature([Book])],
// 	controllers: [BooksController],
// 	providers: [BooksService],
// 	exports : [BooksService]


// })
import { Module } from '@nestjs/common';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books.service'; 
import { TypeOrmModule} from '@nestjs/typeorm';
import { BooksEntity } from 'src/books/books.entity';
import { booksProviders } from 'src/providers';
// import { DatabaseModule } from 'database/database.module';

@Module({

	  imports: [TypeOrmModule.forFeature([BooksEntity])],
      controllers: [BooksController],
      providers: [BooksService]

})
export class BooksModule {}



    


// import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookSchema } from  '../../schema/all.schema';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Book } from 'src/books/books.entity';

// imports : [MongooseModule.forFeature([{ name : 'Book', schema: BookSchema}])],

// @Module({
// 	imports : [TypeOrmModule.forFeature([Book])],
// 	controllers: [BooksController],
// 	providers: [BooksService],
// 	exports : [BooksService]

// import { Module } from '@nestjs/common';
//     import { ProjectController } from './project.controller';
//     import { ProjectService } from './project.service';
//     import {TypeOrmModule} from '@nestjs/typeorm';
//     import {ProjectEntity} from './project.entity';
//     @Module({
//         imports: [TypeOrmModule.forFeature([ProjectEntity])],
//         controllers: [ProjectController],
//         providers: [ProjectService]
//     })
//     export class ProjectModule {}




// imports: [DatabaseModule],
// 	controllers: [BooksController],
// 	providers: [BooksService, ...booksProviders],
	

// })
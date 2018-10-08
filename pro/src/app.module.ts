import { Module } from '@nestjs/common';
// import { CatsModule } from './cats/cats.module';
import { BooksModule } from 'src/books/books.module';
import { PublishersModule } from 'src/publishers/publishers.module';
// import {TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthService } from '../src/auth.service';



@Module({

  // import Cats , Books and Publisher Modules - CatsModule,

  imports: [ BooksModule, PublishersModule],
  // imports :[
  // 	TypeOrmModule.forRoot(),
  // 	BooksModule, 
  // 	PublishersModule,
  // ]

  // providers: [AuthService] imports: [ BooksModule, PublishersModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017')],,
  
})
export class ApplicationModule {}
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../interfaces/interface';
import { CreateBookDto } from '../dto/create.dto';
import { BOOK_MODEL_PROVIDER } from '../src/constants';
import { UserEntity } from '../users/users.entity';
import { BooksEntity } from 'src/books/books.entity';
// import { BOOK_MODEL_PROVIDER } from 'constants';


@Injectable()
export class BooksService {
	constructor(@Inject( BOOK_MODEL_PROVIDER )private readonly bookModel: Model<Book>) {}
	
	async create(createBookDto: CreateBookDto): Promise<Book>{
		const createdBook = new this.bookModel(createBookDto);
		return await createdBook.save();
	}


	async findAll(): Promise<Book[]>{
		return await this.bookModel.find().exec();
	}


    public async createBooks(books: CreateBookDto[], user: UserEntity): Promise<BooksEntity[]> {
       return BooksEntity.createBooks(books, user);
	}



}




// import { Repository } from 'typeorm';
// import { Injectable, Inject } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Book } from 'src/books/books.entity';




// @Injectable()
// export class BooksService {
// 	constructor (
// 		@InjectRepository(Book)
// 		private readonly bookRepository : Repository<Book>,
// 	){}

// 	async findAll(): Promise<Book[]>{
// 		return await this.bookRepository.find();
// 	}
// }
	// private readonly books: Book[] = [];


// findAll(): Book[] {
// 	return this.books;
// }

// create(book: Book) {
// 	this.books.push(book);
//  }

import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Book } from '../interfaces/interface';
import { Book } from 'src/books/books.entity';


@Injectable()
export class BooksService {
	constructor (
		@InjectRepository(Book)
		private readonly bookRepository : Repository<Book>,
	){}

	async findAll(): Promise<Book[]>{
		return await this.bookRepository.find();
	}
}
 


// @Injectable()
// export class BooksService {
// 	private readonly books: Book[] = [];


// findAll(): Book[] {
// 	return this.books;
// }

// create(book: Book) {
// 	this.books.push(book);
//  }

// }

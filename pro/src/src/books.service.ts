import { Injectable } from '@nestjs/common';
import { Book } from '../interfaces/interface';

@Injectable()
export class BooksService {
	private readonly books: Book[] = [];


findAll(): Book[] {
	return this.books;
}

create(book: Book) {
	this.books.push(book);
 }

}

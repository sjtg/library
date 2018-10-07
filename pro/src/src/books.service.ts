import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
	private readonly books: string[] = ['Drama', 'Thriller'];

findAll(): string[] {
	return this.books;
}

create(book: string) {
	this.books.push(book);
 }

}

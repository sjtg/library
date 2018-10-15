import {CreateBookDto} from 'dto/create.dto';
import {UserEntity} from 'users/users.entity';
import {BooksEntity} from '../books/books.entity';

export interface IBooksService {
    createBooks(books: CreateBookDto[], user: UserEntity): Promise<BooksEntity[]>;
    getBooksForUser(user: UserEntity): Promise<BooksEntity[]>;

}

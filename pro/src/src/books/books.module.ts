import { Module, Global } from '@nestjs/common';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books.service'; 

@Global()
@Module({
	controllers: [BooksController],
	providers: [BooksService],
	exports : [BooksService]

})
export class BooksModule {}

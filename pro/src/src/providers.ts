import { Connection } from 'mongoose';
import { BookSchema } from '../schema/all.schema';
import { BOOK_MODEL_PROVIDER, DB_PROVIDER } from '../src/constants';

export const booksProviders = [
  {
    provide: BOOK_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Book', BookSchema),
    inject: [DB_PROVIDER],
  },
];



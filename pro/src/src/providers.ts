import { Connection } from 'mongoose';
import { BookSchema, PublisherSchema } from '../schema/all.schema';
import { BOOK_MODEL_PROVIDER, PUBLISHER_MODEL_PROVIDER ,  DB_PROVIDER } from '../src/constants';

export const booksProviders = [
  {
    provide: BOOK_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Book', BookSchema),
    inject: [DB_PROVIDER],
  },
];



export const publishersProviders = [
  {
    provide: PUBLISHER_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Publisher', PublisherSchema),
    inject: [DB_PROVIDER],
  },
];


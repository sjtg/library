    import { CreateUserDto} from '../dto/users.dto';
    import { UserEntity } from './users.entity';
	import { BooksEntity } from '../src/books/books.entity';
    import { PublishersEntity } from '../src/publishers/publisher.entity';
    


export interface IUserService {
        findAll(): Promise<UserEntity[]>;
        createUser(user: CreateUserDto): Promise<UserEntity>;
        getBooksForUser(user: UserEntity): Promise<BooksEntity[]>;
        getPublishersForUser(user: UserEntity): Promise<PublishersEntity[]>;
}
}
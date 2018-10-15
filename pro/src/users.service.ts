    import { Injectable } from '@nestjs/common'; 
    import { CreateUserDto } from '../src/dto/users.dto';
    import { UserEntity } from '../src/users/users.entity';
    import { IUserService} from '../src/users/IUserService';
    import { BooksEntity } from '../src/src/books/books.entity';
    import { PublishersEntity } from '../src/src/publishers/publisher.entity';


    @Injectable()
	export class UserService implements IUserService{
    public async findAll(): Promise<UserEntity[]> {
        return await UserEntity.findAll();
    }
    public async createUser(user: CreateUserDto): Promise<UserEntity> {
       return await UserEntity.createUser(user);
    }
    public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
        return undefined;
    }
}
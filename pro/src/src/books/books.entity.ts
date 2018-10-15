import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { UserEntity} from '../../users/users.entity';
import { CreateBookDto } from 'dto/create.dto';
import { AppErrorTypeEnum } from 'commons/error/AppErrorTypeEnum';
import { AppError } from 'commons/error/AppError';

@Entity({name: 'books'})
    export class BooksEntity extends BaseEntity{
        @PrimaryGeneratedColumn()
        id: number;
        @Column({ length: 500})
        bookname: string;
        @Column({ length: 500})
        genre: string;
        @Column()
        description : string;
        @Column('int')
        views : number;
        @Column()
        isBorrowed: boolean;
        @ManyToOne(type => UserEntity)
        user: UserEntity;


       public static async createBooks(books: CreateBookDto[], user: UserEntity): Promise<BooksEntity[]> {
       const u: UserEntity = await UserEntity.findOne(user.id);
       if (!u) throw new AppError(AppErrorTypeEnum.USER_NOT_FOUND);
       const booksEntities: BooksEntity[] = [];
       books.forEach((p: CreateBookDto) => {
           const pr: BooksEntity = new BooksEntity();
           pr.id = p.id;
           pr.bookname = p.bookname;
           pr.genre = p.genre;
           pr.description = p.description;
           pr.views = p.views;
           pr.isBorrowed = p.isBorrowed;
           booksEntities.push(pr);
       });
       u.books = booksEntities;
       const result: BooksEntity[] = await BooksEntity.save(booksEntities);
       await UserEntity.save([u]);
       return Promise.all(result);
   			
   	}

     public static async getBooks(user: UserEntity): Promise<BooksEntity[]> {
            const u: UserEntity = await UserEntity.findOne(user.id, { relations: ['books']});
            if (!u) throw new AppError(AppErrorTypeEnum.USER_NOT_FOUND);
            return Promise.all(u.books);
        }
}


    
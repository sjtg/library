import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { UserEntity} from '../../users/users.entity';
import { CreatePublisherDto } from 'dto/create.dto';
import { AppErrorTypeEnum } from 'commons/error/AppErrorTypeEnum';
import { AppError } from 'commons/error/AppError';


@Entity({name: 'publishers'})
    export class PublishersEntity extends BaseEntity{
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
        isPublished: boolean;
        @ManyToOne(type => UserEntity)
        user: UserEntity;


       public static async createPublishers(publishers: CreatePublisherDto[], user: UserEntity): Promise<PublishersEntity[]> {
       const u: UserEntity = await UserEntity.findOne(user.id);
       if (!u) throw new AppError(AppErrorTypeEnum.USER_NOT_FOUND);
       const publishersEntities: PublishersEntity[] = [];
       publishers.forEach((p: CreatePublisherDto) => {
           const pr: PublishersEntity = new PublishersEntity();
           pr.id = p.id;
           pr.bookname = p.bookname;
           pr.genre = p.genre;
           pr.description = p.description;
           pr.views = p.views;
           pr.isPublished = p.isPublished;
           publishersEntities.push(pr);
       });
       u.publishers = publishersEntities;
       const result: PublishersEntity[] = await PublishersEntity.save(publishersEntities);
       await UserEntity.save([u]);
       return Promise.all(result);
   			
   	
     }

      public static async getPublishers(user: UserEntity): Promise<PublishersEntity[]> {
            const u: UserEntity = await UserEntity.findOne(user.id, { relations: ['books']});
            if (!u) throw new AppError(AppErrorTypeEnum.USER_NOT_FOUND);
            return Promise.all(u.publishers);
        }
    }

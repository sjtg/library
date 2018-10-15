import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UserEntity} from '../../users/users.entity';
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
    }

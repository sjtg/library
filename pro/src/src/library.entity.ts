    import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
    import {UserEntity} from '../users/users.entity';
    @Entity({name: 'books'})
    export class Books extends BaseEntity{
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
    }



  
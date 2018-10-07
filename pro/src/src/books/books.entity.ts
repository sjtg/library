import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
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
}

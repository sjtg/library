import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Publisher {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500})
	author: string;

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
}

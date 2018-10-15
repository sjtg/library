import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


export class CreateBookDto {
		@PrimaryGeneratedColumn() 
		id: number;
		@Column('text')
		bookname: string;
		@Column('text')
		genre: string;
		@Column('text')
		description : string;
		@Column('text') 
		views : number;
		@Column('text')
		isBorrowed : boolean;

}


export class CreatePublisherDto{
		@PrimaryGeneratedColumn() 
		id: number;
		@Column('text')
		bookname: string;
		@Column('text')
		genre: string;
		@Column('text')
		description : string;
		@Column('text') 
		views : number;
		@Column('text')
		isPublished : boolean;

}


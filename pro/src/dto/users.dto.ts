import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
    

export class CreateUserDto {
		@PrimaryGeneratedColumn() 
		id: number;
        @Column('text')
        firstName: string;
        @Column('text')
        lastName: string;
       	@Column('text')
        username: string;
        @Column('text')
        password: string;
    }
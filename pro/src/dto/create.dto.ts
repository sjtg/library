import {IsString } from 'class-validator';


export class CreateCatDto {
	readonly name: string ;
	readonly age: number;
	readonly breed: string;
}


export class CreateBookDto {
@IsString()	readonly bookname: string;
@IsString()	readonly genre: string;

}


export class CreatePublisherDto{
@IsString()	readonly publishername: string;
@IsString()	readonly genre: string; 
}
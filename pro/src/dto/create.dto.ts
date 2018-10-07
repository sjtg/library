import {IsString } from 'class-validator';


export class CreateCatDto {
	readonly name: string ;
	readonly age: number;
	readonly breed: string;
}


export class CreateBookDto {
	
	@IsString() readonly id: number;
	@IsString()	readonly bookname: string;
	@IsString()	readonly genre: string;
	@IsString()	readonly description : string;
	@IsString()	readonly views : number;
	@IsString()	readonly isBorrowed : boolean;

}


export class CreatePublisherDto{

	@IsString() readonly id : number;
	@IsString() readonly author : string;
	@IsString()	readonly publishername : string;
	@IsString()	readonly genre: string; 
	@IsString() readonly description : string;
	@IsString() readonly views : string;
	@IsString() readonly isPublished : boolean;

}


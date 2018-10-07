export class CreateCatDto {
	readonly name: string ;
	readonly age: number;
	readonly breed: string;
}


export class CreateBookDto {
	readonly bookname: string;
	readonly genre: string;

}


export class CreatePublisherDto{
	readonly publishername: string;
	readonly genre: string; 
}
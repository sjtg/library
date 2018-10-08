// import {IsString } from 'class-validator';


// export class CreateCatDto {
// 	readonly name: string ;
// 	readonly age: number;
// 	readonly breed: string;
// }


export class CreateBookDto {
	
	 	readonly id: number;
		readonly bookname: string;
		readonly genre: string;
		readonly description : string;
		readonly views : number;
		readonly isBorrowed : boolean;
		readonly book: [{
						author: string,
						publishername: string,
						genre: string,
						description: string,
						views: number,
						isPublished: boolean,
						
		}]

}


// export class CreatePublisherDto{

// 	 readonly id : number;
// 	 readonly author : string;
// 		readonly publishername : string;
// 		readonly genre: string; 
// 	 readonly description : string;
// 	 readonly views : string;
// 	 readonly isPublished : boolean;

// }


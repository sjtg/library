import { Document } from 'mongoose';

// export class Cat {
// 	readonly name: string ;
// 	readonly age: number;
// 	readonly breed: string;
// }


export interface Book extends Document {
	readonly id : number;
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


export interface Publisher extends Document{
	 readonly id : number;
	 readonly author : string;
	 readonly publishername : string;
	 readonly genre: string; 
	 readonly description : string;
	 readonly views : number;
	 readonly isPublished : boolean; 
}
import * as mongoose from 'mongoose';

// export const CatSchema  = new mongoose.Schema({
// 	name: String,
// 	age: Number,
// 	breed: String,
// });


export const BookSchema = new mongoose.Schema({
	id: Number,
	bookname: String,
	genre: String,
	description : String,
	views: Number,
	isBorrowed : Boolean,
	book: [{
						author: String,
						publishername: String,
						genre: String,
						description: String,
						views: Number,
						isPublished: Boolean,
		}],
});

export const PublisherSchema = new mongoose.Schema({
	id: Number,
	author: String,
	bookname: String,
	genre: String,
	description : String,
	views : Number,
	isPublished : Boolean,
});
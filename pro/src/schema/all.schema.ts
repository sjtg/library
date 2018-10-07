import * as mongoose from 'mongoose';

export const CatSchema  = new mongoose.Schema({
	name: String,
	age: Number,
	breed: String,
});


export const BookSchema = new mongoose.Schema({
	name: String,
	genre: String,
});

export const PublisherSchema = new mongoose.Schema({
	name: String,
	genre: String,
});
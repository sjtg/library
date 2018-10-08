// import { Model } from 'mongoose';
// import { Injectable, Inject } from '@nestjs/common';
// import { Publisher } from '../interfaces/interface';
// import { CreatePublisherDto } from '../dto/create.dto';

// @Injectable()
// export class PublishersService {
// 	constructor(@Inject('PublisherModelToken') private readonly PublisherModel: Model<Publisher>) {}

// 	async create(createPublisherDto: CreatePublisherDto): Promise<Publisher>{
// 		const createdPublisher = new this.PublisherModel(createPublisherDto);
// 		return await createdPublisher.save();
// 	}


// 	async findAll(): Promise<Publisher[]>{
// 		return await this.PublisherModel.find().exec();
// 	}



// }

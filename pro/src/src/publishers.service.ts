import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Publisher } from '../interfaces/interface';
import { CreatePublisherDto } from '../dto/create.dto';
import { PUBLISHER_MODEL_PROVIDER } from '../src/constants';
import { UserEntity } from '../users/users.entity';
import { PublishersEntity } from 'src/publishers/publisher.entity';
// import { BOOK_MODEL_PROVIDER } from 'constants';


@Injectable()
export class PublishersService {
	constructor(@Inject( PUBLISHER_MODEL_PROVIDER )private readonly publisherModel: Model<Publisher>) {}
	
	async create(createPublisherDto: CreatePublisherDto): Promise<Publisher>{
		const createdPublisher = new this.publisherModel(createPublisherDto);
		return await createdPublisher.save();
	}


	async findAll(): Promise<Publisher[]>{
		return await this.publisherModel.find().exec();
	}



    public async createPublishers(publishers: CreatePublisherDto[], user: UserEntity): Promise<PublishersEntity[]> {
       return PublishersEntity.createPublishers(publishers, user);
	}


	public async getPublishersForUser(user: UserEntity): Promise<PublishersEntity[]> {
	    return PublishersEntity.getPublishers(user);
	}




}
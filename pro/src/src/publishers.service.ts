import { Injectable } from '@nestjs/common';
import { Publisher } from '../interfaces/interface';

@Injectable()
export class PublishersService {
	private readonly publishers: Publisher[] = [];

	findAll(): Publisher[] {
		return this.publishers;

	}

	create(publisher: Publisher){
		this.publishers.push(publisher);
	}
}




import {CreatePublisherDto} from 'dto/create.dto';
import {UserEntity} from 'users/users.entity';
import {PublishersEntity} from '../publishers/publisher.entity';

export interface IPublishersService {
    createPublishers(publishers: CreatePublisherDto[], user: UserEntity): Promise<PublishersEntity[]>;
    getPublishersForUser(user: UserEntity): Promise<PublishersEntity[]>;

}

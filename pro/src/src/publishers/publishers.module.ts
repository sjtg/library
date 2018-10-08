import { Module } from '@nestjs/common';

// import { MongooseModule } from '@nestjs/mongoose';
import { PublishersController } from 'src/publishers/publishers.controller';
import { PublishersService } from 'src/publishers.service'; 
import { booksProviders } from 'src/providers';
import { publishersProviders } from 'src/providers';
import { DatabaseModule } from 'database/database.module';
// import { PublisherSchema } from  '../../schema/all.schema';





@Module({
	
	imports: [DatabaseModule],
	controllers: [PublishersController],
	providers: [PublishersService, ...publishersProviders],


})
export class PublishersModule {}


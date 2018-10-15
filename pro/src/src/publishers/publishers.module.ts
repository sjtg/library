import { Module } from '@nestjs/common';
import { PublishersController } from 'src/publishers/publishers.controller';
import { PublishersService } from 'src/publishers.service'; 
import { TypeOrmModule} from '@nestjs/typeorm';
import { PublishersEntity } from 'src/publishers/publisher.entity';
import { publishersProviders } from 'src/providers';
import { DatabaseModule } from 'database/database.module';

@Module({
	
	
	  imports: [TypeOrmModule.forFeature([PublishersEntity])],
      controllers: [PublishersController],
      providers: [PublishersService]

})
export class PublishersModule {}
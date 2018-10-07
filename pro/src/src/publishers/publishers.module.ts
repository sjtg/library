import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishersController } from 'src/publishers/publishers.controller';
import { PublishersService } from 'src/publishers.service'; 
import { Publisher } from 'src/publishers/publisher.entity';


@Module({
	imports : [TypeOrmModule.forFeature([Publisher])],
	controllers: [PublishersController],
	providers: [PublishersService],
	exports: [PublishersService]

})
export class PublishersModule {}

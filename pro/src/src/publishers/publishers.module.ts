import { Module, Global } from '@nestjs/common';
import { PublishersController } from 'src/publishers/publishers.controller';
import { PublishersService } from 'src/publishers.service'; 

@Global()
@Module({
	controllers: [PublishersController],
	providers: [PublishersService],
	exports: [PublishersService]

})
export class PublishersModule {}

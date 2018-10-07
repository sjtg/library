import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from 'src/cats.service'; 
import { CatSchema } from '../schema/all.schema';

@Global()
@Module({
	imports : [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema}])],
	controllers: [CatsController],
	providers: [CatsService],
	exports : [CatsService],

})
export class CatsModule {}

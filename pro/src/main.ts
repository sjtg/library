import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { DocumentBuilder } from 
// import { DispatchError} from './commons/filter/DispatchError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new DispatchError());
  // const options = new DocumentBuilder()
  //       .setTitle('User Session Tutorial')
  //       .setDescription('Basic Auth and session management')
  //       .setVersion('1.0')
  //       .addTag('nestjs')
  //       .build();
  await app.listen(3003);
}
bootstrap();



    import { Module } from '@nestjs/common';
    import { AppController } from './app.controller';
    import { AppService } from './app.service';
    import { TypeOrmModule} from '@nestjs/typeorm';
    import { UsersModule } from './users/users.module';
    import { UserEntity} from './users/users.entity';
    import { BooksModule } from 'src/books/books.module';
    import { PublishersModule } from 'src/publishers/publishers.module';
    @Module({
      imports: [
          TypeOrmModule.forRoot({
              type: 'sqlite',
              database: `${process.cwd()}/library.sqlite`,
              entities: [UserEntity, BooksModule, PublishersModule,],
              synchronize: true,
              // logging: 'all'
          }),
          UsersModule,
          BooksModule, 
          PublishersModule,
      ],
      controllers: [AppController],
      providers: [ AppService ],
    })
    export class AppModule {}
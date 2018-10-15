import { Controller, Get, Post, Body , HttpStatus, Res, UseGuards} from '@nestjs/common';
import {SessionGuard} from '../../auth/SessionGuard';
import {SessionUser} from '../../users/user.decorator';
import { UserEntity} from '../../users/users.entity';
import { CreatePublisherDto } from '../../dto/create.dto';
import { PublishersService } from '../publishers.service';
import { Publisher  as PublisherInterface } from '../../interfaces/interface';
import { PublishersEntity } from '../publishers/publisher.entity';
import { AppErrorTypeEnum } from 'commons/error/AppErrorTypeEnum';
import { AppError } from 'commons/error/AppError';
@Controller('publishers')

export class PublishersController {

	constructor(private readonly publisersService: PublishersService) {}

  @Post('')
    @UseGuards(SessionGuard)
    public async createPublishers(@Body() createPublishers: CreatePublisherDto[], @Res() res, @SessionUser() user: UserEntity) {
        const publishers: PublishersEntity[] = await this.publisersService.createPublishers(createPublishers, user);
        return res.status(HttpStatus.OK).send(publishers);
    }


    public static async getPublishers(user: UserEntity): Promise<PublishersEntity[]> {
        const u: UserEntity = await UserEntity.findOne(user.id, { relations: ['publishers']});
        if (!u) throw new AppError(AppErrorTypeEnum.USER_NOT_FOUND);
        return Promise.all(u.publishers);
    }


    @Get('')
    @UseGuards(SessionGuard)
    public async getPublishers(@Res() res, @SessionUser() user: UserEntity) {
        const publishers: PublishersEntity[] = await this.publisersService.getPublishersForUser(user);
        return res.status(HttpStatus.OK).send(publishers);
    }

	  // Post New books 
  @Post()
  // @UsePipes(new ValidationPipe())
  async create(@Body() createPublisherDto: CreatePublisherDto) {
    this.publisersService.create(createPublisherDto);
  }

  @Get()
  async findAll(): Promise<PublisherInterface[]> {
    return this.publisersService.findAll();
  }
}
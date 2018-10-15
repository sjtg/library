import {Body, Controller, Get, HttpStatus, Post, Req, Res, Session} from '@nestjs/common';
import { UsersService} from '../users.service';
import { UserEntity } from './users.entity';
import { CreateUserDto } from '../dto/users.dto';
import {Request, Response} from 'express';


@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('')
    public async getAllUsers(@Req() req: Request, @Res() res, @Session() session) {
        const users: UserEntity[] = await this.usersService.findAll();
        return res
                .status(HttpStatus.OK)
                .send(users);
    }
    @Post('')
    public async create(@Body() createUser: CreateUserDto, @Res() res) {
        await this.usersService.createUser(createUser);
        return res.status(HttpStatus.CREATED).send();
    }

    @Post('login')
    public async login(@Req() req: Request, @Res() res: Response, @Session() session) {
        return res.status(HttpStatus.OK).send();
    }
}



// @Post()
//   // @UsePipes(new ValidationPipe())
//   async create(@Body() createBookDto: CreateBookDto) {
//       this.booksService.create(createBookDto);
//   }

//   @Get()
//   async findAll(): Promise<BookInterface[]> {
//       return this.booksService.findAll();
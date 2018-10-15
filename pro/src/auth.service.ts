import { Injectable } from '@nestjs/common';
import { UserEntity } from 'users/users.entity';
// import { UsersService } from 'users.service';


@Injectable()
export class AuthService {

    async validateUser(user: {username: string, password: string}): Promise<any> {
    return await UserEntity.authenticateUser(user);
    }

	// constructor(private readonly usersService: UsersService){}

	// async validateUser(token: string): Promise<any>{
	// 	return await this.usersService.findOneByToken(token);
	// }
}

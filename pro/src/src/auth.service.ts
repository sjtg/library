import { Injectable } from '@nestjs/common';
// import { UserServices } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '';
import { JwtPayload } from './interfaces/jtw-payload.interface';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly jwtService: JwtService,
		){}


	async signIn(): Promise<string>{
		const user: JwtPayload = { email: 'user@email.com'}
		return this.jwtService.sign(user);
	}

	async validateUser(payload: JwtPayload): Promise<any>{
		return await this.userService.findOneByEmail(payload.email);
	}
}

import { Module } from '@nestjs/common';
import { AuthService } from "../auth.service";
import {HttpStrategy} from '../http.strategy';
import {AppAuthGuard} from './AppAuthGuard';
// import {CookieSerializer} from './cookie-serializer';


@Module({
	providers: [AuthService, HttpStrategy, AppAuthGuard]
})
export class AuthModule {}


// import { JwtStrategy } from './jwt.strategy';
// import { HttpStrategy } from '../http.strategy';
// import { UsersModule } from '../users/users.module';
// import { AuthGuard } from '@nestjs/passport';
// import { JwtModule} from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthController }from '../auth/auth.controller'; providers: [AuthService, HttpStrategy, AppAuthGuard, CookieSerializer]

// @Module({
// 	imports: [UsersModule],
// 	providers: [AuthService, HttpStrategy], 
// })
//     @Module({
// imports: [
// 	PassportModule.register({ defaultStrategy: 'jwt'}),
// 	JwtModule.register({
// 		secretOrPrivateKey: 'secretKey',
// 		signOptions: {
// 			expiresIn: 3600,
// 		}
// 	})
// ],
// controllers: [AuthController],
// providers: [AuthService, JwtStrategy],
// })
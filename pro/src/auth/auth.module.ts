import { Module } from '@nestjs/common';
import { JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController }from '../auth.controller';
import { AuthService } from "../auth.service";
import { JwtStrategy } from './jwt.strategy';
// import { HttpStrategy } from '../http.strategy';
// import { UsersModule } from '../users/users.module';
// import { AuthGuard } from '@nestjs/passport';
import { AuthController } from './auth.controller';



// @Module({
// 	imports: [UsersModule],
// 	providers: [AuthService, HttpStrategy], 
// })
@Module({
imports: [
	PassportModule.register({ defaultStrategy: 'jwt'}),
	JwtModule.register({
		secretOrPrivateKey: 'secretKey',
		signOptions: {
			expiresIn: 3600,
		}
	})
],
controllers: [AuthController],
providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

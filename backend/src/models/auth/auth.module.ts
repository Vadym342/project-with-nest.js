import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from './../users/users.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

const configService = new ConfigService();
@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '360000s' },
      secret: `${configService.get('SECRET_JWT')}`,
    }),
  ],
  providers: [AuthService, JwtStrategy, AuthResolver, LocalStrategy],
  exports: [PassportModule],
})
export class AuthModule { }

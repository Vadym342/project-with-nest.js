import { LoginUserDto } from './dto/login-user';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    console.log(user)
    if (user && user.password === password) { // More Secure
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(loginUserDto.username);
    return {
      accessToken: this.jwtService.sign({ email: user.email, sub: user.id }),
      user
    }
  }
}
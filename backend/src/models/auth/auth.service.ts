import { LoginUserDto } from './dto/login-user';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { comparePassword } from '../../utils/bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    let matchPassword : boolean;
    if (user) {
      matchPassword = comparePassword(password, user.password);
    }
    if (user && matchPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(loginUserDto.username);
    const newUser = user;
    return {
      accessToken: this.jwtService.sign({ email: user.email, sub: user.id }),
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        password: ''
      }
    }
  }
}
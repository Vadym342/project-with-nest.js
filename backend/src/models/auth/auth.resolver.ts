import { GqlAuthGuard } from './gql-auth.guard';
import { LoginResponse } from './dto/login-response';
import { AuthService } from './auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginUserDto } from './dto/login-user';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUserDto') loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('userDto', { type: () => CreateUserDto }) userDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Query(() => [User], { name: 'getAllUsers' })
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Query(() => User, { name: 'getUserById' })
  getUserById(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserDto', { type: () => UpdateUserDto })
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(updateUserDto.id, updateUserDto);
  }

  @Mutation(() => User)
  removeUserById(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.removeUserById(id);
  }
}

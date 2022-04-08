import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  createUser(@Args('userDto', { type: () => CreateUserInput }) userDto: CreateUserInput) {
    return this.usersService.createUser(userDto);
  }

  @Query(() => [User], { name: 'getAllUsers' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Query(() => User, { name: 'getOneUser' })
  getOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getOneUser(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserDto', { type: () => UpdateUserInput })
    updateUserDto: UpdateUserInput,
  ) {
    return this.usersService.updateUser(updateUserDto.id, updateUserDto);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.removeUser(id);
  }
}

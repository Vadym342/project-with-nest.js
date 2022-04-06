import { Int } from '@nestjs/graphql';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';


@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @Mutation(returns => User)
    createUser(@Args('userDto') userDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(userDto);
    }

    @Query(returns => [User])
    getAll(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
    @Query(returns => User)
    getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
        return this.usersService.getUser(id);
    }

}

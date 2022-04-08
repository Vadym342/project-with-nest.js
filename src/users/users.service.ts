import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserInput): Promise<User> {
    try {
      const user = await this.userRepository.create(dto);
      return user;
    } catch (e) {
      throw Error(e);
    }
  }
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.findAll();
      return users;
    } catch (e) {
      throw Error(e);
    }
  }

  async getOneUser(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findByPk(id);
      return user;
    } catch (e) {
      throw Error(e);
    }
  }

  async updateUser(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    try {
      const user = await this.userRepository.findByPk(id);
      if (user) {
        await user.update(updateUserInput);
        await user.save();
        return user;
      }
    } catch (e) {
      throw Error(e);
    }
  }

  async removeUser(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findByPk(id);
      if (user) {
        await user.destroy();
        return user;
      }
    } catch (e) {
      throw Error(e);
    }
  }
}

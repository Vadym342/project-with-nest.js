import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(userDto);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where:{
        email:email
      }
    });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (user) {
      await user.update(updateUserDto);
      await user.save();
      return user;
    }
  }

  async removeUserById(id: number): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
  }
}

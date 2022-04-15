import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto} from './dto/update-user.dto';
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

  async getOneUser(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async updateUser(
    id: number,
    updateUserInput: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (user) {
      await user.update(updateUserInput);
      await user.save();
      return user;
    }
  }

  async removeUser(id: number): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
  }
}

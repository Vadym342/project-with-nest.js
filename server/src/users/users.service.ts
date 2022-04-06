import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }

    async getUser(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        return user;
    }
}

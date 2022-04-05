import { User } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from "@nestjs/common";


@Module({
    imports: [
        SequelizeModule.forFeature([User]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule { }
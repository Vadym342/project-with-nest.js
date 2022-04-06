import { UsersResolver } from './users.resolver';
import { User } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { Module } from "@nestjs/common";


@Module({
    imports: [
        SequelizeModule.forFeature([User]),
    ],
    providers: [UsersService, UsersResolver],
})

export class UsersModule { }
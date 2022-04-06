import { OrdersResolver } from './orders.resolver';
import { User } from './../users/users.model';
import { Order } from './orders.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Order,User]),
  ],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule { }

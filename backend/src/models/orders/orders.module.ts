import { ProductOrder } from './../products/entities/productOrder.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, User, ProductOrder])],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}

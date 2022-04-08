import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Organization } from 'src/organizations/entities/organization.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, User, Organization])],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
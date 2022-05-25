import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrderItemsService } from './orderItems.service';
import { OrderItemsResolver } from './orderItems.resolver';
import { OrderItem } from './entities/orderItem.entity';

@Module({
  imports: [SequelizeModule.forFeature([OrderItem])],
  providers: [OrderItemsResolver, OrderItemsService],
})
export class OrderItemsModule {}

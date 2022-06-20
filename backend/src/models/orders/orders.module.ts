import { ShipmentsService } from './../shipments/shipments.service';
import { Shipment } from './../shipments/entities/shipment.entity';
import { OrderItemsService } from './../orderItems/orderItems.service';
import { OrderItem } from './../orderItems/entities/orderItem.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, User, OrderItem, Shipment])],
  providers: [
    OrdersResolver,
    OrdersService,
    OrderItemsService,
    ShipmentsService,
  ],
})
export class OrdersModule {}

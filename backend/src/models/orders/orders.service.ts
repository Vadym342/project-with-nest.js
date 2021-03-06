import { OrderItem } from './../orderItems/entities/orderItem.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(OrderItem) private orderItemRepository: typeof OrderItem,
  ) {}

  async createOrder(orderDto: CreateOrderDto): Promise<Order> {
    //new field in model TOTAL PRICE, items.foreach
    const user = await this.userRepository.findOne({
      where: { id: orderDto.ownerId },
    });
    if (user) {
      return await this.orderRepository.create(orderDto);
    }
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async getOrderById(id: number) {
    return await this.orderRepository.findByPk(id);
  }

  async updateOrder(
    id: number,
    updateOrderInput: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.orderRepository.findByPk(id);
    if (order) {
      await order.update(updateOrderInput);
      await order.save();
      return order;
    }
  }

  async removeOrderById(id: number): Promise<Order> {
    const order = await this.orderRepository.findByPk(id);
    if (order) {
      await order.destroy();
      return order;
    }
  }
}

import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { User } from 'src/models/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(User) private userRepository: typeof User,
  ) {}

  async createOrder(orderDto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepository.findOne({
      where: { id: orderDto.creatorId },
    });
    if (user) {
      const order = await this.orderRepository.create(orderDto);
      return order;
    }
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async getOneOrder(id: number): Promise<Order> {
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

  async removeOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findByPk(id);
    if (order) {
      await order.destroy();
      return order;
    }
  }
}

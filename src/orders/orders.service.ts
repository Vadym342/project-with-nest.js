import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(User) private userRepository: typeof User,
  ) {}

  async createOrder(orderDto: CreateOrderInput): Promise<Order> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: orderDto.creatorId },
      });
      if (user) {
        const order = await this.orderRepository.create(orderDto);
        return order;
      }
    } catch (e) {
      throw Error(e);
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      const orders = await this.orderRepository.findAll();
      return orders;
    } catch (e) {
      throw Error(e);
    }
  }

  async getOneOrder(id: number): Promise<Order> {
    try {
      const order = await this.orderRepository.findByPk(id);
      return order;
    } catch (e) {
      throw Error(e);
    }
  }

  async updateOrder(
    id: number,
    updateOrderInput: UpdateOrderInput,
  ): Promise<Order> {
    try {
      const order = await this.orderRepository.findByPk(id);
      if (order) {
        await order.update(updateOrderInput);
        await order.save();
        return order;
      }
    } catch (e) {
      throw Error(e);
    }
  }

  async removeOrder(id: number): Promise<Order> {
    try {
      const order = await this.orderRepository.findByPk(id);
      if (order) {
        await order.destroy();
        return order;
      }
    } catch (e) {
      throw Error(e);
    }
  }
}

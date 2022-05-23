import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItemDto } from './dto/update-orderItem.dto';
import { OrderItem } from './entities/orderItem.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectModel(OrderItem)
    private OrderItemRepository: typeof OrderItem,
  ) {}

  async createOrderItem(
    OrderItemDto: CreateOrderItemDto,
  ): Promise<OrderItem> {
    return await this.OrderItemRepository.create(OrderItemDto);
  }

  async getAllOrderItems(): Promise<OrderItem[]> {
    return await this.OrderItemRepository.findAll();
  }

  async getOrderItemById(id: number): Promise<OrderItem> {
    return await this.OrderItemRepository.findByPk(id);
  }

  async updateOrderItem(
    id: number,
    updateOrderItemInput: UpdateOrderItemDto,
  ): Promise<OrderItem> {
    const OrderItem = await this.OrderItemRepository.findByPk(id);
    if (OrderItem) {
      await OrderItem.update(updateOrderItemInput);
      await OrderItem.save(); 
      return OrderItem;
    }
  }

  async removeOrderItemById(id: number): Promise<OrderItem> {
    const OrderItem = await this.OrderItemRepository.findByPk(id);
    if (OrderItem) {
      await OrderItem.destroy();
      return OrderItem;
    }
  }
}

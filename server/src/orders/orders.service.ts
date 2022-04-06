import { User } from './../users/users.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order) private orderRepository: typeof Order,
        @InjectModel(User) private userRepository: typeof User
    ) { }

    async createOrder(dto: CreateOrderDto): Promise<Order> {
        const user = await this.userRepository.findOne({ where: { id: dto.creatorId } });
        console.log(user);
        if (user) {
            const order = await this.orderRepository.create(dto);
            return order;
        }
    }
}

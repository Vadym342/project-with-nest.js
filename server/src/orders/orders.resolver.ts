import { Order } from './orders.model';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
import { Body, Controller, Post } from '@nestjs/common';

@Resolver(of => Order)
export class OrdersResolver {
    constructor(private orderService: OrdersService) { }

    @Mutation(returns => Order)
    createOrder(@Args('orderDto') orderDto: CreateOrderDto){
        return this.orderService.createOrder(orderDto);
    }
}

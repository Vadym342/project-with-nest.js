import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) { }

  @Mutation(() => Order)
  createOrder(@Args('orderDto', { type: () => CreateOrderInput }) orderDto: CreateOrderInput) {
    return this.ordersService.createOrder(orderDto);
  }

  @Query(() => [Order], { name: 'getAllOrders' })
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Query(() => Order, { name: 'getOneOrder' })
  getOneOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.getOneOrder(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput', { type: () => UpdateOrderInput }) updateOrderInput: UpdateOrderInput) {
    return this.ordersService.updateOrder(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.removeOrder(id);
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto} from './dto/update-order.dto';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(
    @Args('orderDto', { type: () => CreateOrderDto })
    orderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.ordersService.createOrder(orderDto);
  }

  @Query(() => [Order], { name: 'getAllOrders' })
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Query(() => Order, { name: 'getOneOrder' })
  getOneOrder(@Args('id', { type: () => Int }) id: number): Promise<Order> {
    return this.ordersService.getOneOrder(id);
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput', { type: () => UpdateOrderDto })
    updateOrderInput: UpdateOrderDto,
  ): Promise<Order> {
    return this.ordersService.updateOrder(
      updateOrderInput.id,
      updateOrderInput,
    );
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number): Promise<Order> {
    return this.ordersService.removeOrder(id);
  }
}

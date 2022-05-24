import { Shipment } from './../shipments/entities/shipment.entity';
import { ShipmentsService } from './../shipments/shipments.service';
import { OrderItemsService } from './../orderItems/orderItems.service';
import { OrderItem } from './../orderItems/entities/orderItem.entity';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderItemsSerice: OrderItemsService,
    private readonly shipmentsService: ShipmentsService,
  ) { }

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

  @ResolveField(() => Shipment)
  async shipment(@Parent() shipment) {
    const { id } = shipment;
    return this.shipmentsService.getShipmentByOrderId(id);
  }

  @ResolveField(() => OrderItem)
  async items(@Parent() orderItem) {
    const { id } = orderItem;
    return this.orderItemsSerice.getOrderItemsForOrderById(id);
  }

  @Query(() => Order, { name: 'getOrderById' })
  getOrderById(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.getOrderById(id);
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
  removeOrderById(@Args('id', { type: () => Int }) id: number): Promise<Order> {
    return this.ordersService.removeOrderById(id);
  }
}

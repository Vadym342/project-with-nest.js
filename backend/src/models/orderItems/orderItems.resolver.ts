import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItemsService } from './orderItems.service';
import { OrderItem } from './entities/orderItem.entity';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItemDto } from './dto/update-orderItem.dto';

@Resolver(() => OrderItem)
export class OrderItemsResolver {
  constructor(private readonly OrderItemsService: OrderItemsService) {}

  @Mutation(() => OrderItem)
  createOrderItem(
    @Args('OrderItemDto', { type: () => CreateOrderItemDto })
    OrderItemDto: CreateOrderItemDto,
  ): Promise<OrderItem> {
    return this.OrderItemsService.createOrderItem(OrderItemDto);
  }

  @Query(() => [OrderItem], { name: 'getAllOrderItems' })
  getAllOrderItems(): Promise<OrderItem[]> {
    return this.OrderItemsService.getAllOrderItems();
  }

  @Query(() => [OrderItem], { name: 'getOrderItemsForOrderById' })
  getOrderItemsForOrderById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderItem[]> {
    return this.OrderItemsService.getOrderItemsForOrderById(id);
  }
  @Query(() => OrderItem, { name: 'getOrderItemById' })
  getOrderItemById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderItem> {
    return this.OrderItemsService.getOrderItemById(id);
  }

  @Mutation(() => OrderItem)
  updateOrderItem(
    @Args('updateOrderItemInput')
    updateOrderItemInput: UpdateOrderItemDto,
  ): Promise<OrderItem> {
    return this.OrderItemsService.updateOrderItem(
      updateOrderItemInput.id,
      updateOrderItemInput,
    );
  }

  @Mutation(() => OrderItem)
  removeOrderItemById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderItem> {
    return this.OrderItemsService.removeOrderItemById(id);
  }
}

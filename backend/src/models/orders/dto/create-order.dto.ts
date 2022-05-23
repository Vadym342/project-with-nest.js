import { CreateOrderItemDto } from './../../orderItems/dto/create-orderItem.dto';
import { OrderItem } from './../../orderItems/entities/orderItem.entity';
import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';

@InputType()
export class CreateOrderDto {
  @Field(() => Int)
  ownerId: number;
  @Field(() => Statuses)
  status: Statuses;
  // In OrderService create OrderItem!!!!!!
  @Field(()=> CreateOrderItemDto)
  items: OrderItem[]
}

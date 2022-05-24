import { CreateOrderItemDto } from './../../orderItems/dto/create-orderItem.dto';
import { OrderItem } from './../../orderItems/entities/orderItem.entity';
import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';

@InputType()
export class CreateOrderDto {
  @Field(() => Int, { nullable: false })
  ownerId: number;
  @Field(() => Statuses, { nullable: false })
  status: Statuses;

  @Field(() => [CreateOrderItemDto], { nullable: false })
  items: OrderItem[]

  @Field(() => Int, { nullable: false })
  shipmentId: number;
}

import { Product } from './../../products/entities/product.entity';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';

@InputType()
export class CreateOrderDto {
  @Field(() => Int)
  creatorId: number;

  // @Field({ nullable: false })
  // orderItems: [{
  //   productId: number;
  //   quantity: number;
  // }];

  @Field(() => Statuses)
  status: Statuses;
}

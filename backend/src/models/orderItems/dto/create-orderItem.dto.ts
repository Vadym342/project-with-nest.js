import { Field, InputType, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderItemDto {
  @Field(() => Int, { nullable: false })
  orderId: number;

  @Field(() => Int, { nullable: false })
  productId: number;

  @Field(() => Float, { nullable: false })
  orderedPrice: number;

  @Field(() => Int, { nullable: false })
  quantity: number;
}

import { CreateOrderDto } from './create-order.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @Field(() => Int)
  id: number;
}

import { CreateOrderItemDto } from './create-orderItem.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  @Field(() => Int)
  id: number;
}

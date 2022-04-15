import { Field, InputType, Int } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';

@InputType()
export class CreateOrderDto {
  @Field(() => Int)
  creatorId: number;
  @Field(() => Statuses)
  status: Statuses;
}

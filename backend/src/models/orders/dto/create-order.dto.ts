import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';

@InputType()
export class CreateOrderDto {
  @Field(() => Int, { nullable: false })
  ownerId: number;
  
  @Field(() => Statuses, { nullable: false })
  status: Statuses;

  @Field(() => Int, { nullable: true })
  shipmentId: number;
}

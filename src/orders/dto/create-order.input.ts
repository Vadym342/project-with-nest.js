import { Field, InputType, Int } from "@nestjs/graphql";
import { Statuses } from "../entities/order.entity";

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  creatorId: number;
  @Field(() => Statuses)
  status: Statuses;
}
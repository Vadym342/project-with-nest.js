import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOrderDto {
    @Field()
    creatorId: number;
}
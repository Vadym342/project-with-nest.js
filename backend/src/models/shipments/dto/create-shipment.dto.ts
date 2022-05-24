import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateShipmentDto {
  @Field(() => Int, { nullable: false })
  orderId: number;

  @Field({ nullable: false })
  fullName: string;

  @Field({ nullable: false })
  phone: string;

  @Field({ nullable: false })
  country: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: false })
  address: string;
}

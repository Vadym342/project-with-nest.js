import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  discount: number;

  @Field()
  image: string;

  @Field()
  rating: number;

  @Field({ nullable: true })
  isFavorite: boolean;

  @Field(() => Int, { nullable: true })
  organizationId: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Int, { nullable: true })
  specificationId: number;
}

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, MinLength } from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  discount: number;

  @Field()
  image: string;

  @Field()
  rating: number;

  @Field(() => Int)
  organizationId: number;
  
  @Field(() => Int)
  categoryId: number;

  @Field(() => Int)
  specificationId: number;
}

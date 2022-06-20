import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateSpecificationDto {
  @Field({ nullable: true })
  brand: string;

  @Field({ nullable: true })
  model: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  feature: string;

  @Field({ nullable: true })
  producer: string;
}

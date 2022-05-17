import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, MinLength } from 'class-validator';

@InputType()
export class CreateSpecificationDto {
  @Field({ nullable: true })
  brand: string;

  @Field({ nullable: true })
  Model: string;

  @Field({ nullable: true })
  description: string;
  
  @Field({ nullable: true })
  feature: string;

  @Field({ nullable: true })
  producer:string;
}

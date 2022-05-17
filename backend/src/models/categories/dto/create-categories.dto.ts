import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, MinLength } from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string;
}

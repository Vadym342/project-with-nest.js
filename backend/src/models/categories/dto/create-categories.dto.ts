import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string;
}

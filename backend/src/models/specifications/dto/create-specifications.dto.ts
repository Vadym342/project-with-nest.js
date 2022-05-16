import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateSpecificationDto {
  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string;
}

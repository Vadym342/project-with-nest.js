import { Roles } from './../entities/user.entity';
import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string

  @Field()
  @IsEmail()
  email: string;
  
  @Field()
  @MinLength(3)
  password: string;

  @Field(()=> Roles)
  role:Roles;
}

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, IsEmail, MinLength } from 'class-validator';
import { Roles } from '../constants/enums/roles.enum';

@InputType()
export class CreateUserDto {
  @Field()
  @IsAlpha()
  @MinLength(3)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(3)
  password: string;

  @Field(() => Roles)
  role: Roles;

  @Field(() => Int)
  organizationId: number;
}

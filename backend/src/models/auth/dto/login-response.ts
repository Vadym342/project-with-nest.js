import { User } from './../../users/entities/user.entity';
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}
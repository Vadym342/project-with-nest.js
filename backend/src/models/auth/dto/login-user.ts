import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class LoginUserDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
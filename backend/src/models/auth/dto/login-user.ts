import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserDto {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

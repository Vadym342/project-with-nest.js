import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOrganizationDto {
  @Field({nullable:false})
  name: string;
}

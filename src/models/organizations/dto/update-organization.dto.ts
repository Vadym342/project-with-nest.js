import { CreateOrganizationDto } from './create-organization.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrganizationDto extends PartialType(
  CreateOrganizationDto,
) {
  @Field(() => Int)
  id: number;
}

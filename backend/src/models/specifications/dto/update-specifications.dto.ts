import { CreateSpecificationDto } from './create-specifications.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpecificationDto extends PartialType(
  CreateSpecificationDto,
) {
  @Field(() => Int)
  id: number;
}

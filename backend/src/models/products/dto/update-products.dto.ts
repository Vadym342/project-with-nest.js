import { CreateProductDto } from './create-products.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field(() => Int)
  id: number;
}

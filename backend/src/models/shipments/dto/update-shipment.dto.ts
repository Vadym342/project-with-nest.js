import { CreateShipmentDto } from './create-shipment.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {
  @Field(() => Int)
  id: number;
}

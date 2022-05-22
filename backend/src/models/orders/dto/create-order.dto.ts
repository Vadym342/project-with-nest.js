import { Product } from './../../products/entities/product.entity';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';
import { CreateProductDto } from '../../products/dto/create-products.dto';

@InputType()
export class CreateOrderDto {
  @Field(() => Int)
  creatorId: number;
  @Field(() => Statuses)
  status: Statuses;

  // @Field()         /////// NEW STRUCTURE SHIPMENT <- ORDER => ORDERITEMS 
  // items: [{
  //   productId: number,
  //   quantity: number
  // }];
}

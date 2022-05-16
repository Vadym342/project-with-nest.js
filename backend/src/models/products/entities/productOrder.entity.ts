import { Product } from './product.entity';
import { Order } from './../../orders/entities/order.entity';
import { Category } from './../../categories/entities/category.entity';
import { Organization } from '../../organizations/entities/organization.entity';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'productOrder' })
export class ProductOrder extends Model {
  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int, { nullable: false })
  orderId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int, { nullable: false })
  productId: number;
}

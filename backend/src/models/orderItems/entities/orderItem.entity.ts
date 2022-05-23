import { Order } from './../../orders/entities/order.entity';
import { Int, ObjectType, Float } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';
import { Column, DataType, HasMany, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Table({ tableName: 'OrderItems' })
export class OrderItem extends Model<OrderItem> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;
  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int, { nullable: false })
  orderId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int, { nullable: false })
  productId: number;

  @Column
  @Field(() => Float)
  orderedPrice: number;

  @Column
  @Field(() => Int)
  quantity: number;
}

import { ProductOrder } from './../../products/entities/productOrder.entity';
import { Product } from './../../products/entities/product.entity';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

registerEnumType(Statuses, {
  name: 'Statuses',
});

@ObjectType()
@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int)
  creatorId: number;

  // @Column({ allowNull: false })
  // @Field()
  // orderItems: [{
  //   productId: number;
  //   quantity: number;
  // }]

  @Column
  @Field(() => Statuses)
  status: Statuses;

  @BelongsToMany(() => Product, () => ProductOrder)
  products: Product[];

  @BelongsTo(() => User)
  creator: User;
}

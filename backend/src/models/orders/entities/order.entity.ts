import { Shipment } from './../../shipments/entities/shipment.entity';
import { OrderItem } from './../../orderItems/entities/orderItem.entity';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Statuses } from '../constants/enums/statuses.enum';
import {
  BelongsTo,
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
  ownerId: number;

  @ForeignKey(() => Shipment)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int)
  shipmentId : number;

  @Column
  @Field(() => Statuses)
  status: Statuses;

  @Column
  @Field(() => Boolean)
  archived: boolean = false;

  @BelongsTo(() => User)
  creator: User;

  @Field(()=> [OrderItem])
  items: OrderItem[];
}

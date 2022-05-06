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
  @Field(type => Int)
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(type => Int)
  creatorId: number;

  @Column
  @Field(() => Statuses)
  status: Statuses;

  @BelongsTo(() => User)
  creator: User;
}

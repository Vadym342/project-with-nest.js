import { Int, ObjectType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from '../../orders/entities/order.entity';

@ObjectType()
@Table({ tableName: 'shipments' })
export class Shipment extends Model<Shipment> {
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

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  fullName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  country: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  address: string;
}

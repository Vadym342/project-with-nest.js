import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Roles } from '../constants/enums/roles.enum';
import { Order } from '../../orders/entities/order.entity';
import { Organization } from '../../organizations/entities/organization.entity';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

registerEnumType(Roles, {
  name: 'Roles',
});

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;

  @Column({ type: DataType.STRING })
  @Field({ nullable: true })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  @Field()
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  password: string;

  @Column
  @Field(() => Roles)
  role: Roles;

  @ForeignKey(() => Organization)
  @Column({ type: DataType.INTEGER })
  @Field(() => Int)
  organizationId: number;

  @BelongsTo(() => Organization)
  organization: Organization;

  @HasMany(() => Order)
  orders: Order[];
}

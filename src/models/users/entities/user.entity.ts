import { Order } from 'src/models/orders/entities/order.entity';
import { Organization } from 'src/models/organizations/entities/organization.entity';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IUserCreationAttrs } from '../constants/interfaces/user-creation-attrs.interface';
import { Roles } from '../constants/enums/roles.enum';
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
export class User extends Model<User, IUserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(type => Int)
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
  @Field(type => Int)
  organizationId: number;

  @BelongsTo(() => Organization)
  organization: Organization;

  @HasMany(() => Order)
  orders: Order[];
}

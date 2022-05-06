import { Int, ObjectType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'organizations' })
export class Organization extends Model<Organization> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(type => Int)
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  @Field()
  name: string;

  @HasMany(() => User)
  users: User[];
}

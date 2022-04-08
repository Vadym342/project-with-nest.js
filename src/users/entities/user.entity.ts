import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

export enum Roles {
  USER,
  ADMIN,
}

registerEnumType(Roles, {
  name: 'Roles',
});

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field((type) => Int)
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

  //@Column({ type: DataType.ENUM({ values: Object.keys(Roles)}), allowNull:false, defaultValue: Roles.USER})
  @Column
  @Field(() => Roles)
  role: Roles;
}

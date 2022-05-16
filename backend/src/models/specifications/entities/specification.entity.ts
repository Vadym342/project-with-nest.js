import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
@Table({ tableName: 'categories' })
export class Specification extends Model<Specification> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;

  @Column({ type: DataType.STRING })
  @Field({ nullable: false })
  name: string;

  @HasOne(() => Product)
  products: Product;
}

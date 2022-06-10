import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
@Table({ tableName: 'specifications' })
export class Specification extends Model<Specification> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  @Field({ nullable: true })
  brand: string;

  @Column({ type: DataType.STRING, allowNull: true })
  @Field({ nullable: true })
  model: string;

  @Column({ type: DataType.STRING, allowNull: true })
  @Field({ nullable: true })
  description: string;

  @Column({ type: DataType.STRING, allowNull: true })
  @Field({ nullable: true })
  feature: string;

  @Column({ type: DataType.STRING, allowNull: true })
  @Field({ nullable: true })
  producer:string;

  @HasOne(() => Product)
  products: Product;
}

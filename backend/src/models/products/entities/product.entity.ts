import { Specification } from './../../specifications/entities/specification.entity';
import { Category } from './../../categories/entities/category.entity';
import { Organization } from '../../organizations/entities/organization.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @Field(() => Int)
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field({ nullable: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field({ nullable: false })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field({ nullable: false })
  rating: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  @Field({ nullable: true })
  ratingVotes: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  @Field({ nullable: true })
  discount: number;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  @Field({ nullable: true })
  isFavorite: boolean;

  @Column({ type: DataType.STRING, allowNull: false })
  @Field({ nullable: false })
  image: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @Field(() => Int, { nullable: false })
  categoryId: number;

  @ForeignKey(() => Specification)
  @Column({ type: DataType.INTEGER, allowNull: true })
  @Field(() => Int, { nullable: true })
  specificationId: number;

  @ForeignKey(() => Organization)
  @Column({ type: DataType.INTEGER, allowNull: true })
  @Field(() => Int, { nullable: true })
  organizationId: number;

  @BelongsTo(() => Organization)
  organization: Organization;

  @BelongsTo(() => Category)
  category: Category;
}
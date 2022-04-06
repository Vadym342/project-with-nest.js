import { Order } from './../orders/orders.model';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs>{

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
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

    @Column({ type: DataType.ENUM('user', 'admin'), allowNull: false, defaultValue: 'user' })
    @Field()
    role: string

    @ForeignKey(()=> Order)
    orders: Order[]
}
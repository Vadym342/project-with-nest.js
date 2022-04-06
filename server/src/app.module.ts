import { Order } from './orders/orders.model';
import { Organization } from './organizations/organizations.model';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { TestModule } from './testGraphQl/test.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nest',
      models: [User, Organization, Order],
      autoLoadModels: true,
    }),
    TestModule,
    UsersModule,
    OrganizationsModule,
    OrdersModule,
  ],
})
export class AppModule { }

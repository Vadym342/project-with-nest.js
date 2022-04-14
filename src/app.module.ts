import { Organization } from './models/organizations/entities/organization.entity';
import { UsersModule } from './models/users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/users/entities/user.entity';
import { OrganizationsModule } from './models/organizations/organizations.module';
import { OrdersModule } from './models/orders/orders.module';
import { Order } from './models/orders/entities/order.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';
import { auth0Config } from 'config/auth0Config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Organization, Order],
      autoLoadModels: true,
    }),
    AuthModule,
    UsersModule,
    OrganizationsModule,
    OrdersModule,
  ],
})
export class AppModule {}

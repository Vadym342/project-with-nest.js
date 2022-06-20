import { OrderItemsModule } from './models/orderItems/orderItems.module';
import { OrderItem } from './models/orderItems/entities/orderItem.entity';
import { ShipmentsModule } from './models/shipments/shipments.module';
import { Shipment } from './models/shipments/entities/shipment.entity';
import { SpecificationsModule } from './models/specifications/specifications.module';
import { Specification } from './models/specifications/entities/specification.entity';
import { Category } from './models/categories/entities/category.entity';
import { ProductsModule } from './models/products/products.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';
import { Order } from './models/orders/entities/order.entity';
import { OrdersModule } from './models/orders/orders.module';
import { Organization } from './models/organizations/entities/organization.entity';
import { OrganizationsModule } from './models/organizations/organizations.module';
import { User } from './models/users/entities/user.entity';
import { UsersModule } from './models/users/users.module';
import { Product } from './models/products/entities/product.entity';
import { CategoriesModule } from './models/categories/categories.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './filesManagement/file.module';
@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        models: [
          User,
          Organization,
          Order,
          Product,
          Category,
          Specification,
          Shipment,
          OrderItem,
        ],
        autoLoadModels: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    OrganizationsModule,
    OrdersModule,
    ProductsModule,
    CategoriesModule,
    SpecificationsModule,
    ShipmentsModule,
    OrderItemsModule,
    FileModule,
  ],
})
export class AppModule {}

import { Organization } from './organizations/entities/organization.entity';
import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';
import { OrganizationsModule } from './organizations/organizations.module';
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
      database: 'nest-practice',
      models: [User,Organization],
      autoLoadModels: true,
    }),
    UsersModule,
    OrganizationsModule,
  ],
})
export class AppModule { }

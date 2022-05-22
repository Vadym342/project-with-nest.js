import { SpecificationsService } from './../specifications/specifications.service';
import { Specification } from './../specifications/entities/specification.entity';
import { OrganizationsService } from './../organizations/organizations.service';
import { Organization } from './../organizations/entities/organization.entity';
import { CategoriesService } from './../categories/categories.service';
import { Category } from './../categories/entities/category.entity';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([
    Product,
    Category,
    Organization,
    Specification
  ])],
  
  providers: [
    ProductsResolver,
    ProductsService,
    CategoriesService,
    SpecificationsService,
    OrganizationsService
  ],
})
export class ProductsModule { }

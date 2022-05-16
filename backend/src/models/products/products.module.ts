import { CategoriesService } from './../categories/categories.service';
import { Category } from './../categories/entities/category.entity';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';


@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  providers: [ProductsResolver, ProductsService, 
    // CategoriesService
  ],
})
export class ProductsModule {}

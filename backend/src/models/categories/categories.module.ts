import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { Category } from './entities/category.entity';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}

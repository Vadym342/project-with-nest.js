import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private CategoryRepository: typeof Category) { }

  async createCategory(CategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.CategoryRepository.create(CategoryDto);
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.CategoryRepository.findAll({
      order: [
        ['name', 'ASC']
      ]
    });
  }

  async getCategoryById(id: number): Promise<Category> {
    return await this.CategoryRepository.findByPk(id);
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const Category = await this.CategoryRepository.findByPk(id);
    if (Category) {
      await Category.update(updateCategoryDto);
      await Category.save();
      return Category;
    }
  }

  async removeCategoryById(id: number): Promise<Category> {
    const Category = await this.CategoryRepository.findByPk(id);
    if (Category) {
      await Category.destroy();
      return Category;
    }
  }
}

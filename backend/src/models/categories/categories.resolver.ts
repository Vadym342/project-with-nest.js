import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('CategoryDto', { type: () => CreateCategoryDto })
    CategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(CategoryDto);
  }

  @Query(() => [Category], { name: 'getAllCategories' })
  getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAllCategories();
  }

  @Query(() => Category, { name: 'getCategoryById' })
  getCategoryById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryDto', { type: () => UpdateCategoryDto })
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(
      updateCategoryDto.id,
      updateCategoryDto,
    );
  }

  @Mutation(() => Category)
  removeCategoryById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Category> {
    return this.categoriesService.removeCategoryById(id);
  }
}

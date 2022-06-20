import { Specification } from './../specifications/entities/specification.entity';
import { SpecificationsService } from './../specifications/specifications.service';
import { OrganizationsService } from './../organizations/organizations.service';
import { Organization } from './../organizations/entities/organization.entity';
import { CategoriesService } from './../categories/categories.service';
import { UpdateProductDto } from './dto/update-products.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { Category } from '../categories/entities/category.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,
    private readonly organizationsService: OrganizationsService,
    private readonly specificationsService: SpecificationsService,
  ) { }

  @Mutation(() => Product)
  createProduct(
    @Args('productDto', { type: () => CreateProductDto }) productDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.createProduct(productDto);
  }

  @ResolveField(() => Category)
  async category(@Parent() category) {
    const { id } = category;
    return this.categoriesService.getCategoryById(id);
  }

  @ResolveField(() => Organization)
  async organization(@Parent() organization) {
    const { id } = organization;
    return this.organizationsService.getOrganizationById(id);
  }

  @ResolveField(() => Specification)
  async specification(@Parent() specification) {
    const { id } = specification;
    return this.specificationsService.getSpecificationById(id);
  }


  @Query(() => [Product], { name: 'getAllProducts' })
  getAllProducts(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number,
    @Args('categoryId', { type: () => Int, nullable: true }) categoryId?: number,
  ) {
    return this.productsService.getAllProducts(page, pageSize, categoryId);
  }

  @Query(() => [Product], { name: 'getProductsByArrayIds' })
  getProductsByArrayIds(
    @Args('arrayIds', { type: () => [Int] }) arrayIds: number[]
  ): Promise<Product[]> {
    return this.productsService.getProductsByArrayIds(arrayIds);
  }

  @Query(() => [Product], { name: 'getFlashDealsProducts' })
  getFlashDealsProducts(
    @Args('page', { type: () => Int }) page: number,
    @Args('pageSize', { type: () => Int }) pageSize: number,
  ): Promise<Product[]> {
    return this.productsService.getFlashDealsProducts(page, pageSize);
  }

  @Query(() => Product, { name: 'getProductById' })
  getProductById(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductDto', { type: () => UpdateProductDto })
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.updateProduct(updateProductDto.id, updateProductDto);
  }

  @Mutation(() => Product)
  removeProductById(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.removeProductById(id);
  }
}

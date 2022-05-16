import { UpdateProductDto } from './dto/update-products.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';


@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('productDto', { type: () => CreateProductDto }) productDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.createProduct(productDto);
  }

  @Query(() => [Product], { name: 'getAllProducts' })
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
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

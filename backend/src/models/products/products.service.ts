import { Category } from './../categories/entities/category.entity';
import { UpdateProductDto } from './dto/update-products.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Parent, ResolveField } from '@nestjs/graphql';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    // @InjectModel(Category) private categoriesRepository: typeof Category
  ) { }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create(productDto);
  }
  // @ResolveField(returns => Category)
  // async org(@Parent() category) {
  //   const { id } = category;
  //   return this.categoriesRepository.findByPk(id);
  // }
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getProductById(id: number): Promise<Product> {
    return await this.productRepository.findByPk(id);
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findByPk(id);
    if (product) {
      await product.update(updateProductDto);
      await product.save();
      return product;
    }
  }

  async removeProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
  }
}

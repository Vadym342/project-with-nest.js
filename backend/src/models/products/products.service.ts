import { UpdateProductDto } from './dto/update-products.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productRepository: typeof Product) { }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create(productDto);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getFlashDealsProducts(): Promise<Product[]> {
    return await this.productRepository.findAll({
      where: {
        discount: {
          [Op.ne]: null
        }
      }
    })
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

import { FileService } from './../../filesManagement/files.service';
import { UpdateProductDto } from './dto/update-products.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

interface paginateArgs {
  page: number;
  pageSize: number;
}

const paginate = (query: any, { page, pageSize }: paginateArgs) => {
  const offset = page;
  const limit = pageSize;

  return {
    ...query,
    offset,
    limit,
  };
};

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private readonly filesService: FileService,
  ) { }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    try {
      const imageExist = await this.filesService.uploadFileForS3(productDto.image, `uploads/${productDto.image}`)
      if (imageExist) {
        return await this.productRepository.create(productDto);
      }
    }
    catch (err) {
      throw new HttpException("Image or product was not created.", HttpStatus.BAD_REQUEST)
    }
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getProductsByArrayIds(arrayIds: number[]): Promise<Product[]> {
    return await this.productRepository.findAll({
      where: {
        id: { [Op.in]: arrayIds}
      }
    });
  }

  async getFlashDealsProducts(page: number, pageSize: number): Promise<Product[]> {
    return await this.productRepository.findAll(paginate({
      where: {
        discount: {
          [Op.ne]: null
        }
      },
    },
      { page, pageSize },
    ));
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

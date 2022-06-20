import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateSpecificationDto } from './dto/create-specifications.dto';
import { UpdateSpecificationDto } from './dto/update-specifications.dto';
import { Specification } from './entities/specification.entity';

@Injectable()
export class SpecificationsService {
  constructor(
    @InjectModel(Specification)
    private SpecificationRepository: typeof Specification,
  ) {}

  async createSpecification(
    SpecificationDto: CreateSpecificationDto,
  ): Promise<Specification> {
    return await this.SpecificationRepository.create(SpecificationDto);
  }

  async getAllCategories(): Promise<Specification[]> {
    return await this.SpecificationRepository.findAll();
  }

  async getSpecificationById(id: number): Promise<Specification> {
    return await this.SpecificationRepository.findByPk(id);
  }

  async updateSpecification(
    id: number,
    updateSpecificationDto: UpdateSpecificationDto,
  ): Promise<Specification> {
    const Specification = await this.SpecificationRepository.findByPk(id);
    if (Specification) {
      await Specification.update(updateSpecificationDto);
      await Specification.save();
      return Specification;
    }
  }

  async removeSpecificationById(id: number): Promise<Specification> {
    const Specification = await this.SpecificationRepository.findByPk(id);
    if (Specification) {
      await Specification.destroy();
      return Specification;
    }
  }
}

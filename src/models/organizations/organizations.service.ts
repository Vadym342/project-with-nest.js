import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization)
    private organizationRepository: typeof Organization,
  ) {}

  async createOrganization(
    organizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return await this.organizationRepository.create(organizationDto);
  }

  async getAllOrganizations(): Promise<Organization[]> {
    return await this.organizationRepository.findAll();
  }

  async getOneOrganization(id: number): Promise<Organization> {
    return await this.organizationRepository.findByPk(id);
  }

  async updateOrganization(
    id: number,
    updateOrganizationInput: UpdateOrganizationDto,
  ): Promise<Organization> {
    const organization = await this.organizationRepository.findByPk(id);
    if (organization) {
      await organization.update(updateOrganizationInput);
      await organization.save(); // ? method update inside use method save()
      return organization;
    }
  }

  async removeOrganization(id: number): Promise<Organization> {
    const organization = await this.organizationRepository.findByPk(id);
    if (organization) {
      await organization.destroy();
      return organization;
    }
  }
}

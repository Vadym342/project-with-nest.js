import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization)
    private organizationRepository: typeof Organization,
  ) {}

  async createOrganization(
    organizationDto: CreateOrganizationInput,
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
    updateOrganizationInput: UpdateOrganizationInput,
  ): Promise<Organization> {
    const organization = await this.organizationRepository.findByPk(id);
    if (organization) {
      await organization.update(updateOrganizationInput);
      await organization.save();
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

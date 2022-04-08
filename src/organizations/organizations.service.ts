import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(@InjectModel(Organization) private organizationRepository: typeof Organization) { }

  async createOrganization(organizationDto: CreateOrganizationInput): Promise<Organization> {
    try {
      const organization = await this.organizationRepository.create(organizationDto);
      return organization;
    } catch (e) {
      throw Error(e);
    }
  }

  async getAllOrganizations(): Promise<Organization[]> {
    const organizations = await this.organizationRepository.findAll();
    return organizations;
  }

  async getOneOrganization(id: number): Promise<Organization> {
    try {
      const organization = await this.organizationRepository.findByPk(id);
      return organization;
    } catch (e) {
      throw Error(e);
    }
  }

  async updateOrganization(id: number, updateOrganizationInput: UpdateOrganizationInput): Promise<Organization>  {
    try {
      const organization = await this.organizationRepository.findByPk(id);
      if (organization) {
        await organization.update(updateOrganizationInput);
        await organization.save();
        return organization;
      }
    } catch (e) {
      throw Error(e);
    }
  }

  async removeOrganization(id: number): Promise<Organization>  {
    try {
      const organization = await this.organizationRepository.findByPk(id);
      if (organization) {
        await organization.destroy();
        return organization;
      }
    } catch (e) {
      throw Error(e);
    }
  }
}


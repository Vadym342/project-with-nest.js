import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Injectable } from '@nestjs/common';
import { Organization } from './organizations.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrganizationsService {
    constructor(@InjectModel(Organization) private organizationRepository: typeof Organization) { }

    async createOrganization(dto: CreateOrganizationDto): Promise<Organization> {
        const organization = await this.organizationRepository.create(dto);
        return organization;
    }

    async getAllOrganizations(): Promise<Organization[]> {
        const organizations = await this.organizationRepository.findAll();
        return organizations;
    }

}

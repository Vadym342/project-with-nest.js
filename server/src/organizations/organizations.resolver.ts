import { Organization } from './organizations.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationsService } from './organizations.service';

@Resolver(of => Organization)
export class OrganizationsResolver {
    constructor(private organizationService: OrganizationsService) { }

    @Mutation(returns => Organization)
    createOrganization(@Args('organizationDto') organizationDto: CreateOrganizationDto) {
        return this.organizationService.createOrganization(organizationDto);
    }

    @Query(returns => [Organization])
    getAllOrganizations(): Promise<Organization[]> {
        return this.organizationService.getAllOrganizations();
    }


}

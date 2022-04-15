import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganizationsService } from './organizations.service';
import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Resolver(() => Organization)
export class OrganizationsResolver {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Mutation(() => Organization)
  createOrganization(
    @Args('organizationDto', { type: () => CreateOrganizationDto })
    organizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationsService.createOrganization(organizationDto);
  }

  @Query(() => [Organization], { name: 'getAllOrganizations' })
  getAllOrganizations(): Promise<Organization[]> {
    return this.organizationsService.getAllOrganizations();
  }

  @Query(() => Organization, { name: 'getOneOrganization' })
  getOneOrganization(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Organization> {
    return this.organizationsService.getOneOrganization(id);
  }

  @Mutation(() => Organization)
  updateOrganization(
    @Args('updateOrganizationInput')
    updateOrganizationInput: UpdateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationsService.updateOrganization(
      updateOrganizationInput.id,
      updateOrganizationInput,
    );
  }

  @Mutation(() => Organization)
  removeOrganization(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Organization> {
    return this.organizationsService.removeOrganization(id);
  }
}

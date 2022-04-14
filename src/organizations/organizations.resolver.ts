import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganizationsService } from './organizations.service';
import { Organization } from './entities/organization.entity';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';

@Resolver(() => Organization)
export class OrganizationsResolver {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Mutation(() => Organization)
  createOrganization(
    @Args('organizationDto', { type: () => CreateOrganizationInput })
    organizationDto: CreateOrganizationInput,
  ) {
    return this.organizationsService.createOrganization(organizationDto);
  }

  @Query(() => [Organization], { name: 'getAllOrganizations' })
  getAllOrganizations() {
    return this.organizationsService.getAllOrganizations();
  }

  @Query(() => Organization, { name: 'getOneOrganization' })
  getOneOrganization(@Args('id', { type: () => Int }) id: number) {
    return this.organizationsService.getOneOrganization(id);
  }

  @Mutation(() => Organization)
  updateOrganization(
    @Args('updateOrganizationInput')
    updateOrganizationInput: UpdateOrganizationInput,
  ) {
    return this.organizationsService.updateOrganization(
      updateOrganizationInput.id,
      updateOrganizationInput,
    );
  }

  @Mutation(() => Organization)
  removeOrganization(@Args('id', { type: () => Int }) id: number) {
    return this.organizationsService.removeOrganization(id);
  }
}

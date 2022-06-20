import { SpecificationsService } from './specifications.service';
import { Resolver, Query, Mutation, Int, Args } from '@nestjs/graphql';
import { CreateSpecificationDto } from './dto/create-specifications.dto';
import { UpdateSpecificationDto } from './dto/update-specifications.dto';
import { Specification } from './entities/specification.entity';

@Resolver(() => Specification)
export class SpecificationsResolver {
  constructor(private readonly pecificationsService: SpecificationsService) {}

  @Mutation(() => Specification)
  createSpecification(
    @Args('SpecificationDto', { type: () => CreateSpecificationDto })
    SpecificationDto: CreateSpecificationDto,
  ): Promise<Specification> {
    return this.pecificationsService.createSpecification(SpecificationDto);
  }

  @Query(() => [Specification], { name: 'getAllSpecifications' })
  getAllSpecifications(): Promise<Specification[]> {
    return this.pecificationsService.getAllCategories();
  }

  @Query(() => Specification, { name: 'getSpecificationById' })
  getSpecificationById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Specification> {
    return this.pecificationsService.getSpecificationById(id);
  }

  @Mutation(() => Specification)
  updateSpecification(
    @Args('updateSpecificationDto', { type: () => UpdateSpecificationDto })
    updateSpecificationDto: UpdateSpecificationDto,
  ): Promise<Specification> {
    return this.pecificationsService.updateSpecification(
      updateSpecificationDto.id,
      updateSpecificationDto,
    );
  }

  @Mutation(() => Specification)
  removeSpecificationById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Specification> {
    return this.pecificationsService.removeSpecificationById(id);
  }
}

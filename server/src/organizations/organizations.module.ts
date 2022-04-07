import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Organization]),
  ],
  providers: [OrganizationsResolver, OrganizationsService],
})
export class OrganizationsModule {}

import { OrganizationsResolver } from './organizations.resolver';
import { Organization } from './organizations.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';


@Module({
  imports: [
    SequelizeModule.forFeature([Organization]),
  ],
  providers: [OrganizationsService, OrganizationsResolver ],
})
export class OrganizationsModule { }

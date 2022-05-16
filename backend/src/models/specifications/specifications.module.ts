import { SpecificationsService } from './specifications.service';
import { SpecificationsResolver } from './specifications.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { Specification } from './entities/specification.entity';

@Module({
  imports: [SequelizeModule.forFeature([Specification])],
  providers: [SpecificationsResolver, SpecificationsService],
})
export class SpecificationsModule {}

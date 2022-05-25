import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsResolver } from './shipments.resolver';
import { Shipment } from './entities/shipment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Shipment])],
  providers: [ShipmentsResolver, ShipmentsService],
})
export class ShipmentsModule {}

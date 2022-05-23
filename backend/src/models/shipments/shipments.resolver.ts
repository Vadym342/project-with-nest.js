import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './entities/shipment.entity';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Resolver(() => Shipment)
export class ShipmentsResolver {
  constructor(private readonly ShipmentsService: ShipmentsService) {}

  @Mutation(() => Shipment)
  createShipment(
    @Args('ShipmentDto', { type: () => CreateShipmentDto })
    ShipmentDto: CreateShipmentDto,
  ): Promise<Shipment> {
    return this.ShipmentsService.createShipment(ShipmentDto);
  }

  @Query(() => [Shipment], { name: 'getAllShipments' })
  getAllShipments(): Promise<Shipment[]> {
    return this.ShipmentsService.getAllShipments();
  }

  @Query(() => Shipment, { name: 'getShipmentById' })
  getShipmentById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Shipment> {
    return this.ShipmentsService.getShipmentById(id);
  }

  @Mutation(() => Shipment)
  updateShipment(
    @Args('updateShipmentInput')
    updateShipmentInput: UpdateShipmentDto,
  ): Promise<Shipment> {
    return this.ShipmentsService.updateShipment(
      updateShipmentInput.id,
      updateShipmentInput,
    );
  }

  @Mutation(() => Shipment)
  removeShipmentById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Shipment> {
    return this.ShipmentsService.removeShipmentById(id);
  }
}

import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { Shipment } from './entities/shipment.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectModel(Shipment)
    private ShipmentRepository: typeof Shipment,
  ) { }

  async createShipment(
    ShipmentDto: CreateShipmentDto,
  ): Promise<Shipment> {
    return await this.ShipmentRepository.create(ShipmentDto);
  }

  async getAllShipments(): Promise<Shipment[]> {
    return await this.ShipmentRepository.findAll();
  }

  async getShipmentByOrderId(id): Promise<Shipment> {
    return await this.ShipmentRepository.findOne({
      where: {
        orderId: id
      }
    })
  }

  async getShipmentById(id: number): Promise<Shipment> {
    return await this.ShipmentRepository.findByPk(id);
  }

  async updateShipment(
    id: number,
    updateShipmentInput: UpdateShipmentDto,
  ): Promise<Shipment> {
    const Shipment = await this.ShipmentRepository.findByPk(id);
    if (Shipment) {
      await Shipment.update(updateShipmentInput);
      await Shipment.save();
      return Shipment;
    }
  }

  async removeShipmentById(id: number): Promise<Shipment> {
    const Shipment = await this.ShipmentRepository.findByPk(id);
    if (Shipment) {
      await Shipment.destroy();
      return Shipment;
    }
  }
}

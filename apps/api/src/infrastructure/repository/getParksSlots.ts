import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkSlot } from 'src/domain/entities/ParkSlot';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';
import { ParkSlotDocument, ParkSlotModelName } from './parkslot.model';

export class GetParksSlots implements ParkSlotRepository {
  public constructor(
    @InjectModel(ParkSlotModelName)
    private parkSlotModel: Model<ParkSlotDocument>,
  ) {}

  public async create(parkSlot: ParkSlot): Promise<void> {
    await this.parkSlotModel.create(parkSlot);
  }

  public async findAll(): Promise<ParkSlot[]> {
    try {
      const parks = await this.parkSlotModel.find().exec();
      return parks.map((park) => park.toObject() as ParkSlot);
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }

  public async deleteParkById(parkId: string): Promise<void> {
    try {
      await this.parkSlotModel.findByIdAndDelete(parkId).exec();
    } catch (error) {
      console.error('Error in deleteParkById:', error);
      throw error;
    }
  }
}

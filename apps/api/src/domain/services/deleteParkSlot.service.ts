import { Inject } from '@nestjs/common';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';

export class DeleteParkSlot {
  public constructor(
    @Inject(ParkSlotRepository)
    private parkSlotRepository: ParkSlotRepository,
  ) {}

  public async deleteParkById(parkId: string): Promise<void> {
    await this.parkSlotRepository.deleteParkById(parkId);
  }
}

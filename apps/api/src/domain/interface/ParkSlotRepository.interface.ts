import { ParkSlot } from 'src/domain/entities/ParkSlot';

export const ParkSlotRepository = 'ParkSlotRepository';

export interface ParkSlotRepository {
  deleteParkById(parkId: string);
  create(parkSlot: ParkSlot): Promise<void>;
}

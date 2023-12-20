import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetParksSlots } from './infrastructure/repository/getParksSlots';
import {
  ParkSlotModelName,
  ParkSlotSchema,
} from './infrastructure/repository/parkslot.model';
import { ParkSlotRepository } from './domain/interface/ParkSlotRepository.interface';
import { ParkSlotController } from './infrastructure/controller/parkslot.controller';
import { DeleteParkSlotController } from './infrastructure/controller/deleteParkSlot.controller';
import { CreateParkSlot } from './domain/services/CreateParkSlot.service';
import { GetParksSlotsController } from './infrastructure/controller/getParksSlots.controller';
import { GetParksSlotsService } from './domain/services/getParksSlots.service';
import { DeleteParkSlot } from './domain/services/deleteParkSlot.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ParkSlotModelName, schema: ParkSlotSchema },
    ]),
  ],
  controllers: [
    ParkSlotController,
    GetParksSlotsController,
    DeleteParkSlotController,
  ], // Ajoutez GetParksSlotsController ici
  providers: [
    { provide: ParkSlotRepository, useClass: GetParksSlots },
    CreateParkSlot,
    GetParksSlotsService,
    DeleteParkSlot,
  ],
})
export class ParkSlotModule {}

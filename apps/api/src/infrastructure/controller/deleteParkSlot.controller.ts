import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { DeleteParkSlot } from 'src/domain/services/deleteParkSlot.service';

@Controller()
export class ParkSlotController {
  constructor(private readonly deleteParkSlot: DeleteParkSlot) {}

  @Delete('/deletePark/:id')
  deletePark(@Param('id') parkId: string) {
    this.deleteParkSlot.deleteParkById(parkId);
    HttpStatus.OK;
  }
}

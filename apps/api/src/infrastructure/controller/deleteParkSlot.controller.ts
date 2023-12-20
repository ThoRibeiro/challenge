import { Controller, Delete, HttpStatus, Param, Res } from '@nestjs/common';
import { DeleteParkSlot } from 'src/domain/services/deleteParkSlot.service';

@Controller()
export class DeleteParkSlotController {
  constructor(private readonly deleteParkSlot: DeleteParkSlot) {}

  @Delete('/deletePark/:id')
  async deletePark(@Param('id') parkId: string, @Res() res) {
    await this.deleteParkSlot.deleteParkById(parkId);

    return res.status(HttpStatus.OK).send();
  }
}

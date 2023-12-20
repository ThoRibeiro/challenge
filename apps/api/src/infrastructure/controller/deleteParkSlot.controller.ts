import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetParksSlotsService } from 'src/domain/services/getParksSlots.service';

@Controller('/getParks')
export class GetParksSlotsController {
  constructor(private readonly getParksSlotsService: GetParksSlotsService) {}

  @Get()
  async getParksSlots(@Res() res: Response) {
    const parks = await this.getParksSlotsService.getParksSlots();
    return res.status(200).json(parks);
  }
}

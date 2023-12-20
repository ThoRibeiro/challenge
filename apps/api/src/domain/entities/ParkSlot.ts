import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { v4 as uuid } from 'uuid';

export class ParkSlot {
  private id: string;
  private idUser: string;
  private address: string;
  private startDate: Date;
  private endDate: Date;
  private price: number;

  private constructor(payload: CreateParkDTO) {
    this.id = uuid();
    this.idUser = payload.idUser;
    this.address = payload.address;
    this.startDate = payload.startDate;
    this.endDate = payload.endDate;
    this.price = payload.price;
  }

  public static createByUser(payload: CreateParkDTO) {
    return new ParkSlot(payload);
  }
}

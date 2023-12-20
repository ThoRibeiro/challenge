import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParkDTO {
  @IsNotEmpty()
  idUser: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  price: number;
}

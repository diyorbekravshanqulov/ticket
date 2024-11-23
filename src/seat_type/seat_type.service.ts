import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./model/seat_type.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType) {}

  async create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepo.create(createSeatTypeDto);
  }

  async findAll() {
    return this.seatTypeRepo.findAll();
  }

  async findOne(id: number) {
    return this.seatTypeRepo.findByPk(id);
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seatType = await this.seatTypeRepo.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seatType;
  }

  async remove(id: number) {
    const seatTypeRows = await this.seatTypeRepo.destroy({ where: { id } });
    if (seatTypeRows == 0) return "Not found";
    return seatTypeRows;
  }
}

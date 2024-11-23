import { Injectable } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat } from "./model/seat.model";

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto) {
    return this.seatRepo.create(createSeatDto);
  }

  async findAll() {
    return this.seatRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.seatRepo.findByPk(id);
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatRepo.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    return seat[1][0];
  }

  async remove(id: number) {
    const seatRows = await this.seatRepo.destroy({ where: { id } });
    if (seatRows == 0) {
      return "Not found";
    }
    return seatRows;
  }
}

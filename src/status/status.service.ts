import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './model/status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {}

  async create(createStatusDto: CreateStatusDto) {
    return this.statusRepo.create(createStatusDto);
  }

  async findAll() {
    return this.statusRepo.findAll();
  }

  async findOne(id: number) {
    return this.statusRepo.findByPk(id);
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const s = await this.statusRepo.update(updateStatusDto, {
      where: { id },
      returning: true,
    });
    return s[1][0];
  }

  async remove(id: number) {
    const sRows = await this.statusRepo.destroy({ where: { id } });
    if (sRows == 0) return "Not found";
    return sRows;
  }
}

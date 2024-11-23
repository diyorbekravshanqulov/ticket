import { Injectable } from "@nestjs/common";
import { CreateTicketTypeDto } from "./dto/create-ticket_type.dto";
import { UpdateTicketTypeDto } from "./dto/update-ticket_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TicketType } from "./model/ticket_type.model";

@Injectable()
export class TicketTypeService {
  constructor(
    @InjectModel(TicketType) private ticketTypeRepo: typeof TicketType
  ) {}

  async create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeRepo.create(createTicketTypeDto);
  }

  async findAll() {
    return this.ticketTypeRepo.findAll();
  }

  async findOne(id: number) {
    return this.ticketTypeRepo.findByPk(id);
  }

  async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    const ticketType = await this.ticketTypeRepo.update(updateTicketTypeDto, {
      where: { id },
      returning: true,
    });
    return ticketType[1][0];
  }

  async remove(id: number) {
    const ttRows = await this.ticketTypeRepo.destroy({ where: { id } });
    if (ttRows == 0) return "Not found";
    return ttRows;
  }
}

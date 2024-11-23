import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./model/ticket.model";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}

  async create(createTicketDto: CreateTicketDto) {
    return this.ticketRepo.create(createTicketDto);
  }

  async findAll() {
    return this.ticketRepo.findAll();
  }

  async findOne(id: number) {
    return this.ticketRepo.findByPk(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepo.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return ticket;
  }

  async remove(id: number) {
    const tRows = await this.ticketRepo.destroy({ where: { id } });
    if (tRows == 0) return "Not found";
    return tRows;
  }
}

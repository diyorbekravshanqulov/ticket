import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";

@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  async findAll() {
    return this.ticketService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTicketDto: UpdateTicketDto
  ) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}

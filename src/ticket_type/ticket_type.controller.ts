import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketTypeService } from "./ticket_type.service";
import { CreateTicketTypeDto } from "./dto/create-ticket_type.dto";
import { UpdateTicketTypeDto } from "./dto/update-ticket_type.dto";

@Controller("ticket-type")
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @Post()
  async create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @Get()
  async findAll() {
    return this.ticketTypeService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTicketTypeDto: UpdateTicketTypeDto
  ) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.ticketTypeService.remove(+id);
  }
}

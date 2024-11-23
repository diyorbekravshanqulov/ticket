import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";

@ApiTags("Event Type")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Create a new event type" })
  @Post()
  async create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Retrieve all event types" })
  @Get()
  async findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Retrieve an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Delete an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}

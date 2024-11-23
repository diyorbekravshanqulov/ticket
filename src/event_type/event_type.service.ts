import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./model/event_type.model";

@ApiTags("Event Type")
@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeRepo: typeof EventType
  ) {}

  @ApiOperation({ summary: "Create a new event type" })
  async create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepo.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Retrieve all event types" })
  async findAll() {
    return this.eventTypeRepo.findAll();
  }

  @ApiOperation({ summary: "Retrieve an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  async findOne(id: number) {
    return this.eventTypeRepo.findByPk(id);
  }

  @ApiOperation({ summary: "Update an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const et = await this.eventTypeRepo.update(updateEventTypeDto, {
      where: { id },
      returning: true,
    });
    return et[1][0];
  }

  @ApiOperation({ summary: "Delete an event type by ID" })
  @ApiParam({ name: "id", description: "Event type ID" })
  async remove(id: number) {
    return `This action removes a #${id} eventType`;
  }
}

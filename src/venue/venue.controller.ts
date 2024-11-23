import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";

@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  async create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @Get()
  async findAll() {
    return this.venueService.findAll(); 
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.venueService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateVenueDto: UpdateVenueDto
  ) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.venueService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VTypeVenueService } from "./v-type-venue.service";
import { CreateVTypeVenueDto } from "./dto/create-v-type-venue.dto";
import { UpdateVTypeVenueDto } from "./dto/update-v-type-venue.dto";

@Controller("v-type-venue")
export class VTypeVenueController {
  constructor(private readonly vTypeVenueService: VTypeVenueService) {}

  @Post()
  async create(@Body() createVTypeVenueDto: CreateVTypeVenueDto) {
    return this.vTypeVenueService.create(createVTypeVenueDto);
  }

  @Get()
  async findAll() {
    return this.vTypeVenueService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.vTypeVenueService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateVTypeVenueDto: UpdateVTypeVenueDto
  ) {
    return this.vTypeVenueService.update(+id, updateVTypeVenueDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.vTypeVenueService.remove(+id);
  }
}

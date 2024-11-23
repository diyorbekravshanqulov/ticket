import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./models/venue_type.model";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private VenueTypeRepo: typeof VenueType
  ) {}

  async create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.VenueTypeRepo.create(createVenueTypeDto);
  }

  async findAll() {
    return this.VenueTypeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.VenueTypeRepo.findByPk(id);
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venueType = await this.VenueTypeRepo.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return venueType[1][0];
  }

  async remove(id: number) {
    const venueTypeRows = await this.VenueTypeRepo.destroy({ where: { id } });
    if (venueTypeRows == 0) return "Not found";
    return venueTypeRows;
  }
}

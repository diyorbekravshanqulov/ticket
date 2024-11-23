import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

  async create(createVenueDto: CreateVenueDto) {
    return this.venueRepo.create(createVenueDto);
  }

  async findAll() {
    return this.venueRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.venueRepo.findByPk(id);
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = this.venueRepo.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0];
  }

  async remove(id: number) {
    const venueRows = await this.venueRepo.destroy({ where: { id } });
    if (venueRows == 0) {
      return "not found";
    }
    return venueRows;
  }
}

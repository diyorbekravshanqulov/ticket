import { Injectable } from "@nestjs/common";
import { CreateVTypeVenueDto } from "./dto/create-v-type-venue.dto";
import { UpdateVTypeVenueDto } from "./dto/update-v-type-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VTypeVenue } from "./model/v-type_venue.model";

@Injectable()
export class VTypeVenueService {
  constructor(
    @InjectModel(VTypeVenue) private vTypeVenueRepo: typeof VTypeVenue
  ) {}

  async create(createVTypeVenueDto: CreateVTypeVenueDto) {
    return this.vTypeVenueRepo.create(createVTypeVenueDto);
  }

  async findAll() {
    return this.vTypeVenueRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.vTypeVenueRepo.findByPk(id);
  }

  async update(id: number, updateVTypeVenueDto: UpdateVTypeVenueDto) {
    const vTypeVenue = await this.vTypeVenueRepo.update(updateVTypeVenueDto, {
      where: { id },
      returning: true,
    });
    return vTypeVenue[1][0];
  }

  async remove(id: number) {
    const vTypeVenueRows = await this.vTypeVenueRepo.destroy({ where: { id } });
    if (vTypeVenueRows == 0) return "Not found";
    return vTypeVenueRows;
  }
}

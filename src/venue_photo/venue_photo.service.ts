import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./models/venue_photo.model";
import { FileService } from "../file/file.service";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto,
    private readonly fileService: FileService
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto, photo: any) {
    console.log("photo", photo);

    const fileName = await this.fileService.saveFile(photo);
    const event = this.venuePhotoRepo.create({
      ...createVenuePhotoDto,
      url: fileName,
    });

    return event;
  }

  async findAll() {
    return this.venuePhotoRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.venuePhotoRepo.findByPk(id);
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venuePhoto = await this.venuePhotoRepo.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return venuePhoto[1][0];
  }

  async remove(id: number) {
    const venuePhotoRows = await this.venuePhotoRepo.destroy({ where: { id } });
    if (venuePhotoRows == 0) return "Not found";
    return venuePhotoRows;
  }
}

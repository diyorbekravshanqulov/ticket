import { Injectable } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Booking } from "./model/booking.model";

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}

  async create(createBookingDto: CreateBookingDto) {
    return this.bookingRepo.create(createBookingDto);
  }

  async findAll() {
    return this.bookingRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.bookingRepo.findByPk(id);
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepo.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return booking;
  }

  async remove(id: number) {
    const bookingRows = await this.bookingRepo.destroy({ where: { id } });
    if (bookingRows == 0) return "Not found";
    return "successfully removed";
  }
}

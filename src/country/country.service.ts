import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './model/country.model';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepo: typeof Country) {}

  async create(createCountryDto: CreateCountryDto) {
    return this.countryRepo.create(createCountryDto);
  }

  async findAll() {
    return this.countryRepo.findAll();
  }

  async findOne(id: number) {
    return this.countryRepo.findByPk(id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const c = await this.countryRepo.update(updateCountryDto, {
      where: { id },
      returning: true,
    });
    return c[1][0];
  }

  async remove(id: number) {
    const cRows = await this.countryRepo.destroy({ where: { id } });
    if (cRows == 0) return "Not found";
    return cRows;
  }
}

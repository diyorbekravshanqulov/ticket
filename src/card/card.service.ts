import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Card } from "./model/card.model";

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardRepo: typeof Card) {}

  async create(createCardDto: CreateCardDto) {
    return this.cardRepo.create(createCardDto);
  }

  async findAll() {
    return this.cardRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.cardRepo.findByPk(id);
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepo.update(updateCardDto, {
      where: { id },
      returning: true,
    });
    return card[1][0];
  }

  async remove(id: number) {
    const cardRows = await this.cardRepo.destroy({ where: { id } });
    if (cardRows == 0) return "Not found";
    return "successfully removed";
  }
}

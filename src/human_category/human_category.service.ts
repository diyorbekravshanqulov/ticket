import { Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.model";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategoryRepo: typeof HumanCategory
  ) {}

  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepo.create(createHumanCategoryDto);
  }

  async findAll() {
    return this.humanCategoryRepo.findAll();
  }

  async findOne(id: number) {
    return this.humanCategoryRepo.findByPk(id);
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const humanCategory = await this.humanCategoryRepo.update(
      updateHumanCategoryDto,
      { where: { id }, returning: true }
    );
    return humanCategory[1][0];
  }

  async remove(id: number) {
    const humanCategoryRows = await this.humanCategoryRepo.destroy({
      where: { id },
    });
    if (humanCategoryRows == 0) return "Not found";
    return humanCategoryRows;
  }
}

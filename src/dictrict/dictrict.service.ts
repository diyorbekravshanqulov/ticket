import { Injectable } from "@nestjs/common";
import { CreateDictrictDto } from "./dto/create-dictrict.dto";
import { UpdateDictrictDto } from "./dto/update-dictrict.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Dictrict } from "./model/dictrict.model";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Districts")
@Injectable()
export class DictrictService {
  constructor(@InjectModel(Dictrict) private dictrictRepo: typeof Dictrict) {}

  @ApiOperation({ summary: "Create a new district" })
  async create(createDictrictDto: CreateDictrictDto) {
    return this.dictrictRepo.create(createDictrictDto);
  }

  @ApiOperation({ summary: "Find all districts" })
  async findAll() {
    return this.dictrictRepo.findAll();
  }

  @ApiOperation({ summary: "Find a district by ID" })
  async findOne(id: number) {
    return this.dictrictRepo.findByPk(id);
  }

  @ApiOperation({ summary: "Update a district by ID" })
  async update(id: number, updateDictrictDto: UpdateDictrictDto) {
    const d = await this.dictrictRepo.update(updateDictrictDto, {
      where: { id },
      returning: true,
    });
    return d[1][0];
  }

  @ApiOperation({ summary: "Remove a district by ID" })
  async remove(id: number) {
    const dRows = await this.dictrictRepo.destroy({ where: { id } });
    if (dRows == 0) return "Not found";
    return dRows;
  }
}

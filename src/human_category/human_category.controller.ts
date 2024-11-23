import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @Post()
  async create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @Get()
  async findAll() {
    return this.humanCategoryService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.humanCategoryService.remove(+id);
  }
}

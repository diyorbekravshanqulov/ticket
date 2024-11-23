import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { DictrictService } from "./dictrict.service";
import { CreateDictrictDto } from "./dto/create-dictrict.dto";
import { UpdateDictrictDto } from "./dto/update-dictrict.dto";
import { Dictrict } from "./model/dictrict.model";

@ApiTags("Districts")
@Controller("districts")
export class DictrictController {
  constructor(private readonly dictrictService: DictrictService) {}

  @Post()
  @ApiOperation({ summary: "Create a new district" })
 async create(@Body() createDictrictDto: CreateDictrictDto): Promise<Dictrict> {
    return this.dictrictService.create(createDictrictDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all districts" })
  async findAll(): Promise<Dictrict[]> {
    return this.dictrictService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get district by ID" })
  @ApiParam({ name: "id", description: "District ID" })
  async findOne(@Param("id") id: string): Promise<Dictrict> {
    return this.dictrictService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update district by ID" })
  @ApiParam({ name: "id", description: "District ID" })
  async update(
    @Param("id") id: string,
    @Body() updateDictrictDto: UpdateDictrictDto
  ): Promise<Dictrict> {
    return this.dictrictService.update(+id, updateDictrictDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete district by ID" })
  @ApiParam({ name: "id", description: "District ID" })
  async remove(@Param("id") id: string) {
    return this.dictrictService.remove(+id);
  }
}

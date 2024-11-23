import { PartialType } from "@nestjs/mapped-types";
import { CreateHumanCategoryDto } from "./create-human_category.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateHumanCategoryDto extends PartialType(
  CreateHumanCategoryDto
) {
  @ApiProperty({ required: false })
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  startAge?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  finishAge?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  gender?: boolean;
}

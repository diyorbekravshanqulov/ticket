import { PartialType } from "@nestjs/mapped-types";
import { CreateCountryDto } from "./create-country.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional } from "class-validator";

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  name?: string;
}

import { PartialType } from "@nestjs/swagger";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { CreateRegionDto } from "./create-region.dto";

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
  @ApiProperty({
    example: "Updated Region Name",
    description: "Updated name of the region",
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}

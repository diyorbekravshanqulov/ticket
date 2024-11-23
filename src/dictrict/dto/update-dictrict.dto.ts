import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";
import { PartialType } from "@nestjs/swagger";
import { CreateDictrictDto } from "./create-dictrict.dto";

export class UpdateDictrictDto extends PartialType(CreateDictrictDto) {
  @ApiProperty({
    example: "Updated District A",
    description: "Updated name of the district",
  })
  @IsString()
  @MinLength(1)
  name?: string;
}

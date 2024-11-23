import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateDictrictDto {
  @ApiProperty({ example: "District A", description: "Name of the district" })
  @IsString()
  @MinLength(1)
  name: string;
}

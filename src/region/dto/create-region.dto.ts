import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({ example: "Example Region", description: "Name of the region" })
  @IsString()
  @IsNotEmpty()
  name: string;
}

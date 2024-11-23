import { IsString, IsNumber, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  startAge: number;

  @ApiProperty()
  @IsNumber()
  finishAge: number;

  @ApiProperty()
  @IsBoolean()
  gender: boolean;
}

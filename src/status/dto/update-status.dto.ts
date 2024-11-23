import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStatusDto {
  @ApiProperty({ description: "The status value", example: "Active" })
  @IsString()
  @IsNotEmpty()
  status: string;
}

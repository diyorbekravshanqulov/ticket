import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateSeatTypeDto } from "./create-seat_type.dto";

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {
  @ApiProperty({ required: false, description: "The name of the seat type" })
  @IsString()
  @IsNotEmpty()
  name?: string;
}

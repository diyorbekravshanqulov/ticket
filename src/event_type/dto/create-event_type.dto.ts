import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, MinLength, Min } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ example: "Conference", description: "Name of the event type" })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ example: 2, description: "ID of the parent event type" })
  @IsInt()
  @Min(1)
  parentEventTypeId: number;
}

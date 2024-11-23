import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, MinLength, Min } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateEventTypeDto } from "./create-event_type.dto";

export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {
  @ApiProperty({
    example: "Updated Conference",
    description: "Updated name of the event type",
  })
  @IsString()
  @MinLength(1)
  name?: string;

  @ApiProperty({
    example: 3,
    description: "Updated ID of the parent event type",
  })
  @IsInt()
  @Min(1)
  parentEventTypeId?: number;
}

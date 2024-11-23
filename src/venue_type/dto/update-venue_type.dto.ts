import { PartialType } from "@nestjs/mapped-types";
import { CreateVenueTypeDto } from "./create-venue_type.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateVenueTypeDto extends PartialType(CreateVenueTypeDto) {
  @ApiProperty({
    example: "Concert Hall",
    description: "The name of the venue type",
  })
  name?: string;
}

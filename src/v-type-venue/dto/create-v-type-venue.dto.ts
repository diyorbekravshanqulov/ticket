import { IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVTypeVenueDto {
  @ApiProperty({ example: 1, description: "The ID of the venue type" })
  @IsInt()
  venueTypeId: number;

  @ApiProperty({ example: 1, description: "The ID of the venue" })
  @IsInt()
  venueId: number;
}

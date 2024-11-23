import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateVenueDto } from "./create-venue.dto";

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
  @ApiProperty({
    example: "Updated Venue Name",
    description: "The updated name of the venue",
  })
  name?: string;

  @ApiProperty({
    example: "Updated Venue Address",
    description: "The updated address of the venue",
  })
  address?: string;

  @ApiProperty({
    example: "Updated Venue Location",
    description: "The updated location of the venue",
  })
  location?: string;

  @ApiProperty({
    example: "www.updated-venue.com",
    description: "The updated website of the venue",
  })
  site?: string;

  @ApiProperty({
    example: "987654321",
    description: "The updated phone number of the venue",
  })
  phone?: string;

  @ApiProperty({ example: 2, description: "The updated ID of the venue type" })
  venue_typeId?: number;

  @ApiProperty({
    example: "Updated Venue Schema",
    description: "The updated schema of the venue",
  })
  schema?: string;

  @ApiProperty({ example: 2, description: "The updated ID of the region" })
  regionId?: number;

  @ApiProperty({ example: 2, description: "The updated ID of the district" })
  districtId?: number;
}

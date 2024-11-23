import { IsInt, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({ example: "Venue Name", description: "The name of the venue" })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Venue Address",
    description: "The address of the venue",
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: "Venue Location",
    description: "The location of the venue",
  })
  @IsString()
  location: string;

  @ApiProperty({
    example: "www.venue.com",
    description: "The website of the venue",
  })
  @IsString()
  site: string;

  @ApiProperty({
    example: "123456789",
    description: "The phone number of the venue",
  })
  @IsString()
  phone: string;

  @ApiProperty({ example: 1, description: "The ID of the venue type" })
  @IsInt()
  venue_typeId: number;

  @ApiProperty({
    example: "Venue Schema",
    description: "The schema of the venue",
  })
  @IsString()
  schema: string;

  @ApiProperty({ example: 1, description: "The ID of the region" })
  @IsInt()
  regionId: number;

  @ApiProperty({ example: 1, description: "The ID of the district" })
  @IsInt()
  districtId: number;
}

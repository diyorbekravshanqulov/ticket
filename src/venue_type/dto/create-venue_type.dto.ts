import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({
    example: "Concert Hall",
    description: "The name of the venue type",
  })
  name: string;
}

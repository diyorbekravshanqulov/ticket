import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: 1,
    description: "The ID of the venue this photo belongs to",
  })
  venueId: number;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "The URL of the photo",
  })
  url: string;
}

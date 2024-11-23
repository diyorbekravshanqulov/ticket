import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
} from "class-validator";

export class CreateEventDto {
  @ApiProperty({ example: "Event Name", description: "Name of the event" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "http://example.com/photo.jpg",
    description: "URL to the event's photo",
  })
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty({
    example: "2024-03-24T10:00:00Z",
    description: "Start date and time of the event",
  })
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({
    example: 900,
    description: "Start time of the event in minutes (e.g., 900 for 15:00)",
  })
  @IsNumber()
  @IsNotEmpty()
  startTime: number;

  @ApiProperty({
    example: "2024-03-24T18:00:00Z",
    description: "Finish date and time of the event",
  })
  @IsDateString()
  @IsNotEmpty()
  finishDate: Date;

  @ApiProperty({
    example: 1200,
    description: "Finish time of the event in minutes (e.g., 1200 for 20:00)",
  })
  @IsNumber()
  @IsNotEmpty()
  finishTime: number;

  @ApiProperty({
    example: "Event information",
    description: "Additional information about the event",
  })
  @IsString()
  @IsNotEmpty()
  info: string;

  @ApiProperty({ example: 1, description: "ID of the event type" })
  @IsNumber()
  @IsNotEmpty()
  eventTypeId: number;

  @ApiProperty({ example: 1, description: "ID of the human category" })
  @IsNumber()
  @IsNotEmpty()
  humanCategoryId: number;

  @ApiProperty({ example: 1, description: "ID of the venue" })
  @IsNumber()
  @IsNotEmpty()
  venueId: number;

  @ApiProperty({ example: 1, description: "ID of the language" })
  @IsNumber()
  @IsNotEmpty()
  langId: number;

  @ApiProperty({
    example: "2024-03-24T00:00:00Z",
    description: "Release date of the event",
  })
  @IsDateString()
  @IsNotEmpty()
  releaseDate: Date;
}

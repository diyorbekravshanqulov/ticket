import { ApiProperty } from "@nestjs/swagger";
import {
  IsOptional,
  IsString,
  IsDateString,
  IsNumber,
  Min,
} from "class-validator";

export class UpdateEventDto {
  @ApiProperty({ example: "Event Name", description: "Name of the event" })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: "http://example.com/photo.jpg",
    description: "URL to the event's photo",
  })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiProperty({
    example: "2024-03-24T10:00:00Z",
    description: "Start date and time of the event",
  })
  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @ApiProperty({
    example: 900,
    description: "Start time of the event in minutes (e.g., 900 for 15:00)",
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  startTime?: number;

  @ApiProperty({
    example: "2024-03-24T18:00:00Z",
    description: "Finish date and time of the event",
  })
  @IsOptional()
  @IsDateString()
  finishDate?: Date;

  @ApiProperty({
    example: 1200,
    description: "Finish time of the event in minutes (e.g., 1200 for 20:00)",
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  finishTime?: number;

  @ApiProperty({
    example: "Event information",
    description: "Additional information about the event",
  })
  @IsOptional()
  @IsString()
  info?: string;

  @ApiProperty({ example: 1, description: "ID of the event type" })
  @IsOptional()
  @IsNumber()
  @Min(1)
  eventTypeId?: number;

  @ApiProperty({ example: 1, description: "ID of the human category" })
  @IsOptional()
  @IsNumber()
  @Min(1)
  humanCategoryId?: number;

  @ApiProperty({ example: 1, description: "ID of the venue" })
  @IsOptional()
  @IsNumber()
  @Min(1)
  venueId?: number;

  @ApiProperty({ example: 1, description: "ID of the language" })
  @IsOptional()
  @IsNumber()
  @Min(1)
  langId?: number;

  @ApiProperty({
    example: "2024-03-24T00:00:00Z",
    description: "Release date of the event",
  })
  @IsOptional()
  @IsDateString()
  releaseDate?: Date;
}

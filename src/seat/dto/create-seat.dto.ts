import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateSeatDto {
  @IsInt()
  @Min(1)
  sector: number;

  @IsInt()
  @Min(1)
  row_number: number;

  @IsInt()
  @Min(1)
  number: number;

  @IsInt()
  @IsNotEmpty()
  venueId: number;

  @IsInt()
  @IsNotEmpty()
  seatTypeId: number;

  @IsString()
  @IsNotEmpty()
  locationInSchema: string;
}

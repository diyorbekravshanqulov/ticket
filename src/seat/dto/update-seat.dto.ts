import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class UpdateSeatDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  sector?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  row_number?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  number?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  venueId?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  seatTypeId?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  locationInSchema?: string;
}

import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  MinLength,
  MaxLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerAddressDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  countryId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  districtId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  street: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  house: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  flat: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  location: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  postIndex: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  info: string;
}

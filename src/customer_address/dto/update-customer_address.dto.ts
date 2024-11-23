import { PartialType } from "@nestjs/mapped-types";
import { CreateCustomerAddressDto } from "./create-customer_address.dto";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  IsOptional,
  IsInt,
  MaxLength,
} from "class-validator";

export class UpdateCustomerAddressDto extends PartialType(
  CreateCustomerAddressDto
) {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255)
  name?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  countryId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  regionId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  districtId?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255)
  street?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255)
  house?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  flat?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  location?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  postIndex?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  info?: string;
}

import { ApiProperty, PartialType } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { CreateCustomerCardDto } from "./create-customer_card.dto";

export class UpdateCustomerCardDto extends PartialType(CreateCustomerCardDto) {
  @ApiProperty({ example: 1, description: "ID of the customer" })
  @IsInt()
  @IsOptional()
  customerId?: number;

  @ApiProperty({ example: 1, description: "Name of the card" })
  @IsInt()
  @IsOptional()
  name?: number;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number associated with the card",
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: "1234 5678 9012 3456", description: "Card number" })
  @IsString()
  @IsOptional()
  number?: string;

  @ApiProperty({ example: 2024, description: "Expiration year of the card" })
  @IsNumber()
  @IsOptional()
  year?: number;

  @ApiProperty({ example: 12, description: "Expiration month of the card" })
  @IsNumber()
  @IsOptional()
  month?: number;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is active",
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is the main card",
  })
  @IsBoolean()
  @IsOptional()
  isMain?: boolean;
}

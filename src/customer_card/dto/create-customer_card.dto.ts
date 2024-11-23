import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
} from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({ example: 1, description: "ID of the customer" })
  @IsInt()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({ example: 1, description: "Name of the card" })
  @IsInt()
  @IsNotEmpty()
  name: number;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number associated with the card",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: "1234 5678 9012 3456", description: "Card number" })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({ example: 2024, description: "Expiration year of the card" })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({ example: 12, description: "Expiration month of the card" })
  @IsNumber()
  @IsNotEmpty()
  month: number;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is active",
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is the main card",
  })
  @IsBoolean()
  @IsNotEmpty()
  isMain: boolean;
}

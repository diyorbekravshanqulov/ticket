import {
  IsString,
  IsEmail,
  IsDateString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  photo: string;


  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDateString()
  birthDay: Date;

  @ApiProperty()
  @IsBoolean()
  gender: boolean;

  // @ApiProperty()
  // @IsString()
  // hashedRefreshToken: string; // Assuming it's a string, as storing it as a number might cause issues with precision
}


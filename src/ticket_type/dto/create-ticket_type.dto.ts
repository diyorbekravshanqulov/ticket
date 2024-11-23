import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketTypeDto {
  @ApiProperty({
    example: "Standard",
    description: "The name of the ticket type",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}

import { IsString, IsOptional } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTicketTypeDto } from "./create-ticket_type.dto";

export class UpdateTicketTypeDto extends PartialType(CreateTicketTypeDto) {
  @ApiProperty({
    example: "Standard",
    description: "The name of the ticket type",
  })
  @IsString()
  @IsOptional()
  name?: string;
}

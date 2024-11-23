import { IsInt, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTicketDto } from "./create-ticket.dto";

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @ApiProperty({ example: 1, description: "The ID of the event" })
  @IsInt()
  @IsOptional()
  eventId?: number;

  @ApiProperty({ example: 1, description: "The ID of the seat" })
  @IsInt()
  @IsOptional()
  seatId?: number;

  @ApiProperty({ example: 100, description: "The price of the ticket" })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 10, description: "The service fee of the ticket" })
  @IsNumber()
  @IsOptional()
  serviceFee?: number;

  @ApiProperty({ example: 1, description: "The ID of the status" })
  @IsInt()
  @IsOptional()
  statusId?: number;

  @ApiProperty({ example: 1, description: "The ID of the ticket type" })
  @IsInt()
  @IsOptional()
  ticketTypeId?: number;
}

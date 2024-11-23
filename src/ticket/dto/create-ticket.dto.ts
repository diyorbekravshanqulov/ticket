import { IsInt, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({ example: 1, description: "The ID of the event" })
  @IsInt()
  @IsNotEmpty()
  eventId: number;

  @ApiProperty({ example: 1, description: "The ID of the seat" })
  @IsInt()
  @IsNotEmpty()
  seatId: number;

  @ApiProperty({ example: 100, description: "The price of the ticket" })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 10, description: "The service fee of the ticket" })
  @IsNumber()
  @IsNotEmpty()
  serviceFee: number;

  @ApiProperty({ example: 1, description: "The ID of the status" })
  @IsInt()
  @IsNotEmpty()
  statusId: number;

  @ApiProperty({ example: 1, description: "The ID of the ticket type" })
  @IsInt()
  @IsNotEmpty()
  ticketTypeId: number;
}

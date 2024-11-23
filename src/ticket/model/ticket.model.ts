import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Status } from "../../status/model/status.model";
import { TicketType } from "../../ticket_type/model/ticket_type.model";
import { Event } from "../../event/model/event.model";
import { Seat } from "../../seat/model/seat.model";

interface TicketAttributes {
  id: number;
  eventId: number;
  seatId: number;
  price: number;
  serviceFee: number;
  statusId: number;
  ticketTypeId: number;
}

@Table({ tableName: "tickets" })
export class Ticket extends Model<Ticket, TicketAttributes> {
  @ApiProperty({ example: 1, description: "The unique identifier for the ticket" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "The ID of the event associated with the ticket" })
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId: number;

  @ApiProperty({ example: 1, description: "The ID of the seat associated with the ticket" })
  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatId: number;

  @ApiProperty({ example: 100, description: "The price of the ticket" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({ example: 10, description: "The service fee of the ticket" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  serviceFee: number;

  @ApiProperty({ example: 1, description: "The ID of the status associated with the ticket" })
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;

  @ApiProperty({ example: 1, description: "The ID of the ticket type associated with the ticket" })
  @ForeignKey(() => TicketType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticketTypeId: number;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Status)
  status: Status;

  @BelongsTo(() => TicketType)
  ticketType: TicketType;
}

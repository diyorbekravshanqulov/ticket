import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat_type/model/seat_type.model";

interface SeatCreationAttr {
  sector: number;
  row_number: number;
  number: number;
  venueId: number;
  seatTypeId: number;
  locationInSchema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, SeatCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the seat",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "The sector number of the seat" })
  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @ApiProperty({ example: 1, description: "The row number of the seat" })
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @ApiProperty({ example: 1, description: "The number of the seat" })
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueId: number;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatTypeId: number;

  @ApiProperty({
    example: "A1",
    description: "The location of the seat in the venue's seating schema",
  })
  @Column({
    type: DataType.STRING,
  })
  locationInSchema: string;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => SeatType)
  seatType: SeatType;
}

import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "../../venue/models/venue.model";
import { Seat } from "../../seat/model/seat.model";

interface SeatTypeCreationAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, SeatTypeCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the seat type",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: "Standard",
    description: "The name of the seat type",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    type: () => [Venue],
    description: "The venues associated with this seat type",
  })
  @BelongsToMany(() => Venue, () => Seat)
  Venue: Venue[];
}

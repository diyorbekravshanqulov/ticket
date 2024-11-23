import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { VTypeVenue } from "../../v-type-venue/model/v-type_venue.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { SeatType } from "../../seat_type/model/seat_type.model";
import { Seat } from "../../seat/model/seat.model";

interface VenueCreationAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_typeId: number;
  schema: string;
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, VenueCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the venue",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "Venue Name", description: "The name of the venue" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "Venue Address",
    description: "The address of the venue",
  })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({
    example: "Venue Location",
    description: "The location of the venue",
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: "www.venue.com",
    description: "The website of the venue",
  })
  @Column({
    type: DataType.STRING,
  })
  site: string;

  @ApiProperty({
    example: "123456789",
    description: "The phone number of the venue",
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ForeignKey(() => VTypeVenue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_typeId: number;

  @Column({
    type: DataType.STRING,
  })
  schema: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  regionId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  districtId: number;

  @BelongsToMany(() => VenueType, () => VTypeVenue)
  venueType: VenueType[];

  @BelongsToMany(() => SeatType, () => Seat)
  seatType: SeatType[];
}

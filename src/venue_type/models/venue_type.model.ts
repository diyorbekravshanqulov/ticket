import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VTypeVenue } from "../../v-type-venue/model/v-type_venue.model";

interface IVenueTypeCreationAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the venue type",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: "Concert Hall",
    description: "The name of the venue type",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @BelongsToMany(() => Venue, () => VTypeVenue)
  Venue: Venue[];
}

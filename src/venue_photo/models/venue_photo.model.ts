import { ApiProperty } from "@nestjs/swagger";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
// import { Venue } from "../../venue/models/venue.model";

interface IVenuePhotoCreationAttr {
  venueId: number;
  url: string;
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, IVenuePhotoCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the photo",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "The ID of the venue this photo belongs to",
  })
  // @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "The URL of the photo",
  })
  @Column({
    type: DataType.STRING,
  })
  url: string;

  // @BelongsTo(() => Venue)
  // venue: Venue;
}

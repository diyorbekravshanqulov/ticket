import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { EventType } from "../../event_type/model/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Venue } from "../../venue/models/venue.model";

interface EventCreationAttr {
  name: string;
  photo: string;
  startDate: Date;
  startTime: number;
  finishDate: Date;
  finishTime: number;
  info: string;
  eventTypeId: number;
  humanCategoryId: number;
  venueId: number;
  langId: number;
  releaseDate: Date;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, EventCreationAttr> {
  @ApiProperty({ example: 1, description: "Event's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "Event Name", description: "Name of the event" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "http://example.com/photo.jpg",
    description: "URL to the event's photo",
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    example: "2024-03-24T10:00:00Z",
    description: "Start date and time of the event",
  })
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  startDate: Date;

  @ApiProperty({
    example: 900,
    description: "Start time of the event in minutes (e.g., 900 for 15:00)",
  })
  @Column({
    type: DataType.INTEGER,
  })
  startTime: number;

  @ApiProperty({
    example: "2024-03-24T18:00:00Z",
    description: "Finish date and time of the event",
  })
  @Column({
    type: DataType.DATE,
  })
  finishDate: Date;

  @ApiProperty({
    example: 1200,
    description: "Finish time of the event in minutes (e.g., 1200 for 20:00)",
  })
  @Column({
    type: DataType.INTEGER,
  })
  finishTime: number;

  @ApiProperty({
    example: "Event information",
    description: "Additional information about the event",
  })
  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ApiProperty({ example: 1, description: "ID of the event type" })
  // @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  eventTypeId: number;

  @ApiProperty({ example: 1, description: "ID of the human category" })
  // @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  humanCategoryId: number;

  @ApiProperty({ example: 1, description: "ID of the venue" })
  // @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ApiProperty({ example: 1, description: "ID of the language" })
  @Column({
    type: DataType.INTEGER,
  })
  langId: number;

  @ApiProperty({
    example: "2024-03-24T00:00:00Z",
    description: "Release date of the event",
  })
  @Column({
    type: DataType.DATE,
  })
  releaseDate: Date;

  // @BelongsTo(() => EventType)
  // eventType: EventType;

  // @BelongsTo(() => HumanCategory)
  // humanCategory: HumanCategory;

  // @BelongsTo(() => Venue)
  // venue: Venue;
}

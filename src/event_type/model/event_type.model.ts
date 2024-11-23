import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface EventTypeCreationAttr {
  name: string;
  parentEventTypeId: number;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, EventTypeCreationAttr> {
  @ApiProperty({ example: 1, description: "Event Type's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "Conference", description: "Name of the event type" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: 2, description: "ID of the parent event type" })
  @Column({
    type: DataType.INTEGER,
  })
  parentEventTypeId: number;
}

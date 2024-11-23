import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface TicketTypeCreationAttr {
  name: string;
}

@Table({ tableName: "ticket_type" })
export class TicketType extends Model<TicketType, TicketTypeCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the ticket type",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Standard",
    description: "The name of the ticket type",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}

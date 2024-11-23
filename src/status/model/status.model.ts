import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface StatusCreationAttr {
  status: string;
}

@Table({ tableName: "status" })
export class Status extends Model<Status, StatusCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the status",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Active", description: "The status value" })
  @Column({
    type: DataType.STRING,
  })
  status: string;
}

import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

// Interface representing the creation attributes for HumanCategory
interface IHumanCategoryCreationAttr {
  name: string;
  startAge: number;
  finishAge: number;
  gender: boolean;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, IHumanCategoryCreationAttr> {
  @ApiProperty({ example: 1, description: "Human category's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "Category Name", description: "Name of the human category" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: 18, description: "Start age of the human category" })
  @Column({
    type: DataType.SMALLINT,
  })
  startAge: number;

  @ApiProperty({ example: 65, description: "Finish age of the human category" })
  @Column({
    type: DataType.SMALLINT,
  })
  finishAge: number;

  @ApiProperty({ example: true, description: "Gender of the human category (true for male, false for female)" })
  @Column({
    type: DataType.BOOLEAN,
  })
  gender: boolean;
}

import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";


interface AdminCreatorAttr {
  name: string;
  login: string;
  hashed_password: string;
  isActive: boolean;
  isCreator: boolean;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, AdminCreatorAttr> {
  @ApiProperty({ example: 1, description: "Admin's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "Jack", description: "Admin's name" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: "Jack01", description: "Admin's unique login" })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  login: string;

  @ApiProperty({
    example: "jjaacckk0011addmminn",
    description: "Admin's password",
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({ example: false, description: "is Active admin" })
  @Column({
    type: DataType.BOOLEAN,
  })
  isActive: boolean;

  @ApiProperty({ example: false, description: "is creator admin" })
  @Column({
    type: DataType.BOOLEAN,
  })
  isCreator: boolean;
}

import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface CustomerAttributes {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  birthDay: Date;
  gender: boolean;
  // langId: number;
  // hashedRefreshToken: number;
}

@Table({ tableName: "customers" })
export class Customer extends Model<Customer, CustomerAttributes> {
  @ApiProperty({ example: 1, description: "Customer's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "John", description: "Customer's first name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({ example: "Doe", description: "Customer's last name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: "http://example.com/photo.jpg",
    description: "URL to customer's photo",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo: string;


  @ApiProperty({
    example: "john@example.com",
    description: "Customer's email address",
    uniqueItems: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: "1990-01-01",
    description: "Customer's date of birth",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthDay: Date;

  @ApiProperty({
    example: true,
    description: "Customer's gender (true for male, false for female)",
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  gender: boolean;

  // @ApiProperty({
  //   example: 1234567890,
  //   description: "Hashed refresh token for the customer's authentication",
  // })
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // hashedRefreshToken: number;
}

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "../../customer/model/customer.model";

interface CustomerCardAttributes {
  id: number;
  customerId: number;
  name: number;
  phone: string;
  number: string;
  year: number;
  month: number;
  isActive: boolean;
  isMain: boolean;
}

@Table({ tableName: "customer_cards" })
export class CustomerCard extends Model<CustomerCard, CustomerCardAttributes> {
  @ApiProperty({ example: 1, description: "Card unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "ID of the customer associated with this card",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;

  @ApiProperty({
    example: 1234,
    description: "Card name (e.g., Visa, Mastercard)",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  name: number;

  @ApiProperty({
    example: "1234567890",
    description: "Phone number associated with the card",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: "1234 5678 9012 3456", description: "Card number" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @ApiProperty({ example: 2025, description: "Expiration year of the card" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @ApiProperty({ example: 12, description: "Expiration month of the card" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  month: number;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is active",
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;

  @ApiProperty({
    example: true,
    description: "Indicates if the card is the primary card for the customer",
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isMain: boolean;

  @BelongsTo(() => Customer)
  customer: Customer;
}

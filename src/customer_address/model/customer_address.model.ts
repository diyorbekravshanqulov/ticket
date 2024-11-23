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
import { Country } from "../../country/model/country.model";
import { Region } from "../../region/model/region.model";
import { Dictrict } from "../../dictrict/model/dictrict.model";

interface CustomerAddressAttributes {
  id: number;
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  postIndex: number;
  info: string;
}

@Table({ tableName: "customer_addresses" })
export class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttributes> {
  @ApiProperty({ example: 1, description: "Address unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "ID of the customer associated with this address",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;

  @ApiProperty({
    example: "Home",
    description: "Name of the address (e.g., Home, Work)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 1, description: "ID of the country" })
  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  countryId: number;

  @ApiProperty({ example: 1, description: "ID of the region" })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  regionId: number;

  @ApiProperty({ example: 1, description: "ID of the district" })
  @ForeignKey(() => Dictrict)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  districtId: number;

  @ApiProperty({ example: "Main Street", description: "Name of the street" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street: string;

  @ApiProperty({ example: "10A", description: "House or apartment number" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  house: string;

  @ApiProperty({ example: 101, description: "Flat number" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  flat: number;

  @ApiProperty({ example: "Near Park", description: "Location description" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({ example: 12345, description: "Postal code or ZIP code" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  postIndex: number;

  @ApiProperty({
    example: "Additional information about the address",
    description: "Additional information about the address",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Country)
  country: Country;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => Dictrict)
  district: Dictrict;
}

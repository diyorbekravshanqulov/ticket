import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "../../customer/model/customer.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";

interface DistrictCreationAttr {
  name: string;
}

@Table({ tableName: "district" })
export class Dictrict extends Model<Dictrict, DistrictCreationAttr> {
  @ApiProperty({ example: 1, description: "District's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "DistrictName", description: "Name of the district" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    type: () => [Customer],
    description: "Customers associated with this district",
  })
  @BelongsToMany(() => Customer, () => CustomerAddress)
  customers: Customer[];
}

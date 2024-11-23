import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/model/customer.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";

interface CountryCreationAttr {
  name: string;
}

@Table({ tableName: "country" })
export class Country extends Model<Country, CountryCreationAttr> {
  @ApiProperty({ example: 1, description: "Country's unique ID" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "USA", description: "Country's name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Customer, () => CustomerAddress)
  customers: Customer[];
}

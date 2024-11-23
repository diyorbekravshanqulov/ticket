import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICradCreationAttr {
  ticketId: number;
  customerId: number;
  createdAt: Date;
  finishedAt: Date;
  statusId: number;
}

@Table({ tableName: "card" })
export class Card extends Model<Card, ICradCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
  })
  finishedAt: Date;

  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;
}

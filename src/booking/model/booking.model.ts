import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBookingCeationAttr {
  cardId: number;
  createdAt: Date;
  finishedAt: Date;
  paymentMethodId: number;
  deliveryMethodId: number;
  discountCouponId: number;
  statud: number;
}

@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingCeationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  cardId: number;

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
  paymentMethodId: number;

  @Column({
    type: DataType.INTEGER,
  })
  deliveryMethodId: number;

  @Column({
    type: DataType.INTEGER,
  })
  discountCouponId: number;

  @Column({
    type: DataType.INTEGER,
  })
  statud: number;
}

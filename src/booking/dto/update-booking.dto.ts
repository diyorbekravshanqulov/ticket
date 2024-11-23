import { PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  cardId?: number;
  createdAt?: Date;
  finishedAt?: Date;
  paymentMethodId?: number;
  deliveryMethodId?: number;
  discountCouponId?: number;
  statud?: number;
}

import { Module } from '@nestjs/common';
import { VTypeVenueService } from './v-type-venue.service';
import { VTypeVenueController } from './v-type-venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VTypeVenue } from './model/v-type_venue.model';

@Module({
  imports: [SequelizeModule.forFeature([VTypeVenue])],
  controllers: [VTypeVenueController],
  providers: [VTypeVenueService],
})
export class VTypeVenueModule {}

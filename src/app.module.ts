import { Module } from "@nestjs/common";
import { VenueModule } from "./venue/venue.module";
import { SeatModule } from "./seat/seat.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./venue/models/venue.model";
import { Seat } from "./seat/model/seat.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { SeatType } from "./seat_type/model/seat_type.model";
import { VenueType } from "./venue_type/models/venue_type.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { HumanCategory } from "./human_category/models/human_category.model";
import { VTypeVenueModule } from "./v-type-venue/v-type-venue.module";
import { VTypeVenue } from "./v-type-venue/model/v-type_venue.model";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/model/event_type.model";
import { EventModule } from "./event/event.module";
import { CustomerModule } from "./customer/customer.module";
import { TicketModule } from "./ticket/ticket.module";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { Event } from "./event/model/event.model";
import { Customer } from "./customer/model/customer.model";
import { Ticket } from "./ticket/model/ticket.model";
import { CustomerCard } from "./customer_card/model/customer_card.model";
import { CustomerAddress } from "./customer_address/model/customer_address.model";
import { CountryModule } from "./country/country.module";
import { RegionModule } from "./region/region.module";
import { DictrictModule } from "./dictrict/dictrict.module";
import { Country } from "./country/model/country.model";
import { Region } from "./region/model/region.model";
import { Dictrict } from "./dictrict/model/dictrict.model";
import { TicketTypeModule } from "./ticket_type/ticket_type.module";
import { TicketType } from "./ticket_type/model/ticket_type.model";
import { StatusModule } from "./status/status.module";
import { Status } from "./status/model/status.model";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/model/admin.model";
import { BookingModule } from "./booking/booking.module";
import { CardModule } from "./card/card.module";
import { FileModule } from "./file/file.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Venue,
        Seat,
        SeatType,
        VenueType,
        VenuePhoto,
        HumanCategory,
        VTypeVenue,
        EventType,
        Event,
        Customer,
        Ticket,
        CustomerCard,
        CustomerAddress,
        Country,
        Region,
        Dictrict,
        TicketType,
        Status,
        Admin,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    VenueModule,
    SeatModule,
    SeatTypeModule,
    VenueTypeModule,
    VenuePhotoModule,
    HumanCategoryModule,
    VTypeVenueModule,
    EventTypeModule,
    EventModule,
    CustomerModule,
    TicketModule,
    CustomerCardModule,
    CustomerAddressModule,
    CountryModule,
    RegionModule,
    DictrictModule,
    TicketTypeModule,
    StatusModule,
    AdminModule,
    BookingModule,
    CardModule,
    FileModule,
  ],
})
export class AppModule {}

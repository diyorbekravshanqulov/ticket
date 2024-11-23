import { Module } from "@nestjs/common";
import { DictrictService } from "./dictrict.service";
import { DictrictController } from "./dictrict.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Dictrict } from "./model/dictrict.model";

@Module({
  imports: [SequelizeModule.forFeature([Dictrict])],  
  controllers: [DictrictController],
  providers: [DictrictService],
})
export class DictrictModule {}

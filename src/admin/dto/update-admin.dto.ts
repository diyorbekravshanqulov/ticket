import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAdminDto } from "./create-admin.dto";
import { IsBoolean, IsString, MaxLength } from "class-validator";

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @ApiProperty()
  @IsString()
  login?: string;

  @ApiProperty()
  @IsString()
  password?: string;
}

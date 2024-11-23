import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ActivateAdminDto } from "./dto/activate.dto";
import { CreatorAdminDto } from "./dto/creator.dto";
import { SelfGuard } from "../guards/creator.guard";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@ApiTags("Districts")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({ summary: "Create a new Admin" })
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all admins" })
  async findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Get Admin by id" })
  async findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update admin by id" })
  async update(
    @Param("id") id: string,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete admin by id" })
  async remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }

  @Get(":login")
  async getAdminByLogin(@Param("login") login: string) {
    return this.adminService.getAdminByLogin(login);
  }

  @Post("activate")
  @ApiOperation({ summary: "Activate Admin" })
  async avtivateAdmin(@Body() activateAdminDto: ActivateAdminDto) {
    return this.adminService.activateAdmin(activateAdminDto);
  }

  @Post("creator")
  @ApiOperation({ summary: "Activate Admin" })
  async creatorAdmin(@Body() creatorAdminDto: CreatorAdminDto) {
    return this.adminService.activateAdmin(creatorAdminDto);
  }
}

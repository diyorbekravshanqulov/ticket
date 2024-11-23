import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ActivateAdminDto } from "./dto/activate.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";
import { CreatorAdminDto } from "./dto/creator.dto";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.create(createAdminDto);
  }
  async findAll() {
    return this.adminRepo.findAll();
  }

  async findOne(id: number) {
    return this.adminRepo.findByPk(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepo.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return admin[1][0];
  }

  async remove(id: number) {
    const adminRows = await this.adminRepo.destroy({ where: { id } });
    if (adminRows == 0) return "Not found";
    return "successfully removed";
  }

  async getAdminByLogin(login: string) {
    return this.adminRepo.findOne({ where: { login } });
  }

  async activateAdmin(activateAdminDto: ActivateAdminDto) {
    const admin = await this.adminRepo.findByPk(activateAdminDto.AdminId);
    if (admin) {
      admin.isActive ? (admin.isActive = false) : (admin.isActive = true);

      await admin.save();
      return admin;
    }
    throw new NotFoundException("Not found admin");
  }

  async creatorAdmin(creatorAdminDto: CreatorAdminDto) {
    const admin = await this.adminRepo.findByPk(creatorAdminDto.AdminId);
    if (admin) {
      admin.isCreator ? (admin.isCreator = false) : (admin.isCreator = true);

      await admin.save();
      return admin;
    }
    throw new NotFoundException("Not found admin");
  }
}

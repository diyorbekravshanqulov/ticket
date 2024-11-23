import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/model/admin.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async singUp(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.getAdminByLogin(
      createAdminDto.login
    );
    if (condidate) {
      throw new HttpException(
        "This user already exist",
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hashedPassword;

    const newUser = await this.adminService.create(createAdminDto);
    return this.genarateToken(newUser);
  }

  private async genarateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      name: admin.name,
      login: admin.login,
      creator: admin.isCreator,
    };

    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const admin = await this.adminService.getAdminByLogin(loginDto.login);
    if (!admin) {
      throw new UnauthorizedException("wrong login or passowrd");
    }

    const validPassword = await bcrypt.compare(
      loginDto.password,
      admin.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("wrong login or password");
    }
    return this.genarateToken(admin);
  }
}

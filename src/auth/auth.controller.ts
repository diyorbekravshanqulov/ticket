import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @ApiOperation({ summary: "Singup" })
  async sinUp(@Body() createUserDto: CreateAdminDto) {
    return this.authService.singUp(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  @ApiOperation({ summary: "Singin" })
  async signin(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}

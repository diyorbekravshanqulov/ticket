import { Test } from "@nestjs/testing";
import { AdminController } from "../admin.controller";
import { AdminService } from "../admin.service";
import { Admin } from "../model/admin.model";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { adminStub } from "./stubs/admin.stub";
import { UpdateAdminDto } from "../dto/update-admin.dto";
import { JwtService } from "@nestjs/jwt";

jest.mock("../admin.service");

describe("User controller", () => {
  let adminController: AdminController;
  let adminService: AdminService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService, JwtService],
    }).compile();

    adminController = modulRef.get<AdminController>(AdminController);
    adminService = modulRef.get<AdminService>(AdminService);
    jest.clearAllMocks();
  });
  it("User controller should defined", () => {
    expect(adminController).toBeDefined();
  });
  it("User service should be defined", () => {
    expect(adminService).toBeDefined();
  });

  describe("creatUser", () => {
    describe("when createUser is called", () => {
      let admin: Admin;
      let createAdminDto: CreateAdminDto;
      beforeAll(async () => {
        createAdminDto = {
          name: adminStub().name,
          login: adminStub().login,
          password: adminStub().hashed_password,
        };
        admin = await adminController.create(createAdminDto);
        console.log(admin);
      });
      it("then it should called adminService", () => {
        expect(adminService.create).toHaveBeenCalledWith(createAdminDto);
      });
      it("then it should return admin", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });
  // --------------------------------
  describe("Get all admin", () => {
    describe("when createUser is called ", () => {
      let admin: Admin[];
      beforeAll(async () => {
        admin = await adminController.findAll();
        console.log(admin);
      });
      test("then it should call adminService", () => {
        expect(adminService.findAll).toHaveBeenCalled();
      });
      test("then it should call adminService", () => {
        expect(admin).toEqual([adminStub()]);
      });
    });
  });
  // -----------------------------
  describe("Get all admin by id", () => {
    describe("when getAdminById is called", () => {
      let admin: Admin;
      const id = adminStub().id;

      beforeAll(async () => {
        admin = await adminController.findOne(String(id));
        console.log(admin);
      });

      test("then it should call adminService", () => {
        expect(adminService.findOne).toHaveBeenCalledWith(id);
      });

      test("then it should return the admin", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });
  // -------------------------------
  describe("Update admin by id", () => {
    describe("when update is called", () => {
      let admin: Admin;
      const id = adminStub().id;
      let updateAdminDto: UpdateAdminDto;

      beforeAll(async () => {
        updateAdminDto = {
          name: adminStub().name,
          login: adminStub().login,
          password: adminStub().hashed_password,
        };
        admin = await adminController.update(String(id), updateAdminDto);
        console.log(admin);
      });

      test("then it should call adminService update method with correct parameters", () => {
        expect(adminService.update).toHaveBeenCalledWith(id, updateAdminDto);
      });

      test("then it should return the updated admin", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });

  // -------------------------------
  describe("Remove all admin by id", () => {
    describe("when deleteAdminById is called", () => {
      let result: string;

      beforeAll(async () => {
        result = await adminController.remove(String(adminStub().id));
      });

      test("then it should call adminService remove method", () => {
        expect(adminService.remove).toHaveBeenCalled();
      });

      test("then it should return a message indicating successful removal", () => {
        expect(result).toEqual("successfully removed");
      });
    });
  });
});

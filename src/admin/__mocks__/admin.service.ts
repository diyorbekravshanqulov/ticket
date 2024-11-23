import { adminStub } from "../test/stubs/admin.stub";

export const AdminService = jest.fn().mockReturnValue({
  create: jest.fn().mockReturnValue(adminStub()),
  findAll: jest.fn().mockReturnValue([adminStub()]),
  findOne: jest.fn().mockReturnValue(adminStub()),
  update: jest.fn().mockReturnValue(adminStub()),
  remove: jest.fn().mockReturnValue("successfully removed"),
});

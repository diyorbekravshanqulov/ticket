import { Admin } from "../../model/admin.model";

export const adminStub = (): Partial<Admin> => {
  return {
    id: 1,
    name: "Komil",
    login: "komil1",
    hashed_password: "k0m1l",
  };
};

import { Customer } from "../../model/customer.model";

export const customerStub = (): Partial<Customer> => {
  return {
    id: 1,
    firstName: "John",
    lastName: "Jack",
    photo: "photo.png",
    email: "example@gmail.com",
    birthDay: new Date(2020, 1, 20), // Note: Months in JavaScript Date object are zero-based, so 1 represents February
    gender: true,
  };
};

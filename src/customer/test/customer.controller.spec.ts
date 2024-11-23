import { JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import { CustomerController } from "../customer.controller";
import { CustomerService } from "../customer.service";
import { Customer } from "../model/customer.model";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { customerStub } from "./stubs/customer.stub";
import { UpdateCustomerDto } from "../dto/update-customer.dto";

jest.mock("../customer.service");

describe("User controller", () => {
  let customerController: CustomerController;
  let customerService: CustomerService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService, JwtService],
    }).compile();

    customerController = modulRef.get<CustomerController>(CustomerController);
    customerService = modulRef.get<CustomerService>(CustomerService);
    jest.clearAllMocks();
  });
  it("User controller should defined", () => {
    expect(customerController).toBeDefined();
  });
  it("User service should be defined", () => {
    expect(customerService).toBeDefined();
  });

  describe("creatUser", () => {
    describe("when createUser is called", () => {
      let customer: Customer;
      let createCustomerDto: CreateCustomerDto;
      beforeAll(async () => {
        createCustomerDto = {
          firstName: customerStub().firstName,
          lastName: customerStub().lastName,
          photo: customerStub().photo,
          email: customerStub().email,
          birthDay: customerStub().birthDay,
          gender: customerStub().gender,
        };
        customer = await customerController.create(createCustomerDto);
        console.log(customer);
      });
      it("then it should called customerService", () => {
        expect(customerService.create).toHaveBeenCalledWith(createCustomerDto);
      });
      it("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
  // --------------------------------
  describe("Get all customer", () => {
    describe("when createUser is called ", () => {
      let customer: Customer[];
      beforeAll(async () => {
        customer = await customerController.findAll();
        console.log(customer);
      });
      test("then it should call customerService", () => {
        expect(customerService.findAll).toHaveBeenCalled();
      });
      test("then it should call customerService", () => {
        expect(customer).toEqual([customerStub()]);
      });
    });
  });
  // -----------------------------
  describe("Get all customer by id", () => {
    describe("when getCustomerById is called", () => {
      let customer: Customer;
      const id = customerStub().id;

      beforeAll(async () => {
        customer = await customerController.findOne(String(id));
        console.log(customer);
      });

      test("then it should call customerService", () => {
        expect(customerService.findOne).toHaveBeenCalledWith(id);
      });

      test("then it should return the customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
  // -------------------------------
  describe("Update customer by id", () => {
    describe("when update is called", () => {
      let customer: Customer;
      const id = customerStub().id;
      let updateCustomerDto: UpdateCustomerDto;

      beforeAll(async () => {
        updateCustomerDto = {
          firstName: customerStub().firstName,
          lastName: customerStub().lastName,
          photo: customerStub().photo,
          email: customerStub().email,
        };
        customer = await customerController.update(
          String(id),
          updateCustomerDto
        );
        console.log(customer);
      });

      test("then it should call customerService update method with correct parameters", () => {
        expect(customerService.update).toHaveBeenCalledWith(
          id,
          updateCustomerDto
        );
      });

      test("then it should return the updated customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });

  // -------------------------------
  describe("Remove all customer by id", () => {
    describe("when deleteCustomerById is called", () => {
      let result: string;

      beforeAll(async () => {
        result = await customerController.remove(String(customerStub().id));
      });

      test("then it should call customerService remove method", () => {
        expect(customerService.remove).toHaveBeenCalled();
      });

      test("then it should return a message indicating successful removal", () => {
        expect(result).toEqual("successfully removed");
      });
    });
  });
});

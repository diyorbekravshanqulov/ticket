import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./model/customer.model";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerRepo: typeof Customer) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepo.create(createCustomerDto);
  }

  async findAll() {
    return this.customerRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.customerRepo.findByPk(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const c = await this.customerRepo.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return c[1][0];
  }

  async remove(id: number) {
    const cRows = await this.customerRepo.destroy({ where: { id } });
    if (cRows == 0) return "Not found";
    return "successfully removed";
  }
}

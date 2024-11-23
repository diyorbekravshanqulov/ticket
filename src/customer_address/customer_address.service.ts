import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CustomerAddress } from "./model/customer_address.model";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private customerAddressRepo: typeof CustomerAddress
  ) {}

  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressRepo.create(createCustomerAddressDto);
  }

  async findAll() {
    return this.customerAddressRepo.findAll();
  }

  async findOne(id: number) {
    return this.customerAddressRepo.findByPk(id);
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const ca = await this.customerAddressRepo.update(updateCustomerAddressDto, {
      where: { id },
      returning: true,
    });
    return ca[1][0];
  }

  async remove(id: number) {
    const csRows = await this.customerAddressRepo.destroy({ where: { id } });
    if (csRows == 0) return "Not found";
    return csRows;
  }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { CustomerCard } from "./model/customer_card.model";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private customerCardRepo: typeof CustomerCard
  ) {}

  async create(
    createCustomerCardDto: CreateCustomerCardDto
  ): Promise<CustomerCard> {
    return this.customerCardRepo.create(createCustomerCardDto);
  }

  async findAll(): Promise<CustomerCard[]> {
    return this.customerCardRepo.findAll();
  }

  async findOne(id: number): Promise<CustomerCard | null> {
    return this.customerCardRepo.findByPk(id);
  }

  async update(
    id: number,
    updateCustomerCardDto: UpdateCustomerCardDto
  ): Promise<CustomerCard | null> {
    const [updatedRowsCount, updatedRows] = await this.customerCardRepo.update(
      updateCustomerCardDto,
      {
        where: { id },
        returning: true,
      }
    );
    return updatedRowsCount ? updatedRows[0] : null;
  }

  async remove(id: number): Promise<number | string> {
    const deletedRowsCount = await this.customerCardRepo.destroy({
      where: { id },
    });
    return deletedRowsCount ? deletedRowsCount : "Not found";
  }
}

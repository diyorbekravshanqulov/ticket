import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { CustomerCard } from "./model/customer_card.model";

@ApiTags("Customer Card")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @Post()
  @ApiBody({ type: CreateCustomerCardDto })
  @ApiResponse({
    status: 201,
    description: "Creates a new customer card",
    type: CustomerCard,
  })
  async create(
    @Body() createCustomerCardDto: CreateCustomerCardDto
  ): Promise<CustomerCard> {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: "Retrieves all customer cards",
    type: [CustomerCard],
  })
  async findAll(): Promise<CustomerCard[]> {
    return this.customerCardService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: "id", description: "Customer card ID" })
  @ApiResponse({
    status: 200,
    description: "Retrieves a customer card by ID",
    type: CustomerCard,
  })
  async findOne(@Param("id") id: string): Promise<CustomerCard | undefined> {
    return this.customerCardService.findOne(+id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "Customer card ID" })
  @ApiBody({ type: UpdateCustomerCardDto })
  @ApiResponse({
    status: 200,
    description: "Updates a customer card by ID",
    type: CustomerCard,
  })
  async update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ): Promise<CustomerCard | undefined> {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "Customer card ID" })
  @ApiResponse({
    status: 200,
    description: "Removes a customer card by ID",
    type: Number,
  })
  async remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}

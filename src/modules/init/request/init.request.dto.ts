import { ApiProperty } from "@nestjs/swagger";
import { Domain } from "src/configs/api.config";
import { locationInfo } from "src/shared/models/client-context.dto";


class StateInfo {
  @ApiProperty({
    example: 'Name',
    type: String
  })
  name: String;
}

class CityInfo {
  @ApiProperty({
    example: 'Name',
    type: String
  })
  name: String;
}

export class BillingInfo {
  @ApiProperty({
    example: 'Name',
    type: String
  })
  name: String;
  @ApiProperty({
    example: 'address',
    type: String
  })
  address: string;
  @ApiProperty({
    type: StateInfo
  })
  state: StateInfo;
  @ApiProperty({
    type: CityInfo
  })
  city: CityInfo;
  @ApiProperty({
    example: 'example@gmail.com',
    type: String
  })
  email: String
  @ApiProperty({
    example: '123456789',
    type: String
  })
  phone: String;
}

class SelectDescriptor {
  @ApiProperty({
    type: [String]
  })
  images: Array<string>;
  @ApiProperty({
    type: String
  })
  name: String;
}

class SelectCatDescriptor {
  @ApiProperty({
    type: String
  })
  name: String;
}

class SelectCategory {
  @ApiProperty({
    type: SelectCatDescriptor
  })
  descriptor: SelectCatDescriptor;
  @ApiProperty({
    type: String
  })
  id: String
}

class SelectProvider {
  @ApiProperty({
    example: 'deb909f2-8369-49fc-b30b-231b2ec4b874',
    type: String
  })
  id: String;
}

class Count {
  @ApiProperty({
    type: Number
  })
  count: number
}

class Quantity {
  @ApiProperty({
    type: String
  })
  id: string;
  @ApiProperty({
    type: String
  })
  @ApiProperty({
    type: Count
  })
  quantity: Count;
}

class item {
  @ApiProperty({
    example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70',
    type: String
  })
  id: String;
}

class SelectPerson {
  @ApiProperty({
    type: String
  })
  name: String
}

class SelectContact {
  @ApiProperty({
    type: String
  })
  phone: String;
  @ApiProperty({
    type: String
  })
  email: String
}

class SelectCustomer {
  @ApiProperty({
    type: SelectPerson
  })
  person: SelectPerson;
  @ApiProperty({
    type: SelectContact
  })
  contact: SelectContact
}

class SelectFulfillment {
  @ApiProperty({
    type: SelectCustomer
  })
  customer: SelectCustomer;
  @ApiProperty({
    type: String
  })
  id: String
}

class InitOrder {
  @ApiProperty({
    type: SelectProvider
  })
  provider: SelectProvider;
  @ApiProperty({
    type: []
  })
  fulfillment: [];
  @ApiProperty({
    type: [item]
  })
  items: item[];
  @ApiProperty({
    type: BillingInfo
  })
  billing: BillingInfo;
}

class InitRequestMessageDto {
  @ApiProperty({
    type: InitOrder
  })
  order: InitOrder
}

class InitContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'init',
    type: String
  })
  action: String
  @ApiProperty({
    example: '1.1.0',
    type: String
  })
  version: String
  @ApiProperty({
    example: 'ead489b8-81de-49a4-baf6-8d8de7eabf32',
    type: String
  })
  transaction_id?: string
  @ApiProperty({
    type: locationInfo
  })
  location?: locationInfo
  @ApiProperty({
    example: 'openfort-oasp.ossverse.com',
    type: String
  })
  bpp_id?: string
  @ApiProperty({
    example: 'http://openfort-oasp.ossverse.com',
    type: String
  })
  bpp_uri?: string
  @ApiProperty({
    example: 'bap.ossverse.com',
    description:'domain is required'
  })
  bap_id? :string
  @ApiProperty({
    example: 'http://bap.ossverse.com',
    type: String
  })
  bap_uri?: string
  @ApiProperty({
    example: '1d07c819-695c-44ab-bd47-c21678a6ba4e',
    type: String
  })
  message_id?: string
  @ApiProperty({
    example: '2023-10-09T04:46:28.012Z',
    type: String
  })
  timestamp?: string
}

export class InitRequestDto {
  @ApiProperty({
    type: InitContext,
  })
  context: InitContext;
  @ApiProperty({
    type: InitRequestMessageDto
  })
  message: InitRequestMessageDto;
}

export class ListInitRequestDto {
  @ApiProperty({
    type: [InitRequestDto]
  })
  initRequestDto: InitRequestDto[]
}
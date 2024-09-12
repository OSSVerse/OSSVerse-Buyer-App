import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";



class AddressInfo {

  @ApiProperty({
    type: String
  })
  door: String;
  @ApiProperty({
    type: String
  })
  country: String;
  @ApiProperty({
    type: String
  })
  city: String;
  @ApiProperty({
    type: String
  })
  area_code: String;
  @ApiProperty({
    type: String
  })
  state: String;
  @ApiProperty({
    type: String
  })
  building: String;
  @ApiProperty({
    type: String
  })
  name: String;
  @ApiProperty({
    type: String
  })
  locality: String
}

class BillingInfo {
  @ApiProperty({
    type: AddressInfo
  })
  address: AddressInfo;
  @ApiProperty({
    type: String
  })
  phone: String;
  @ApiProperty({
    type: String
  })
  name: String;
  @ApiProperty({
    type: String
  })
  email: String
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
    type: [String]
  })
  locations: Array<string> ;
  @ApiProperty({
    type: SelectDescriptor
  })
  descriptor: SelectDescriptor;
  @ApiProperty({
    type: String
  })
  id: String;
  @ApiProperty({
    type: [SelectCategory]
  })
  categories: SelectCategory[];
}
class Count{
  @ApiProperty({
    type: Number
  })
  count:number
}
class Quantity{
  @ApiProperty({
    type: String
  })
  id:string;
  @ApiProperty({
    type: String
  })
  @ApiProperty({
    type: Count
  })
  quantity:Count;

}
class item {
  @ApiProperty({
    type: String
  })
  id: String;
  @ApiProperty({
    type: String
  })
  fulfilment_id: String;
  @ApiProperty({
    type: SelectProvider
  })
  provider: SelectProvider
  @ApiProperty({
    type: Quantity
  })
  quantity: Quantity
  @ApiProperty({
    type: []
  })
  locations:Array<any>
}

// class item {
//   id: String
// }
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


class SelectOrder {
  @ApiProperty({
    type: SelectProvider
  })
  provider: SelectProvider;
  @ApiProperty({
    type: SelectFulfillment
  })
  fulfillment: SelectFulfillment;
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
    type: SelectOrder
  })
  order: SelectOrder
}
export class InitRequestDto {
  @ApiProperty({
    type: ClientContext,
  })
  context: ClientContext;
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
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsEnum } from 'class-validator';
import { Domain } from "src/configs/api.config";
import { BillingInfo } from "src/modules/init/request/init.request.dto";
import { locationInfo } from "src/shared/models/client-context.dto";

export enum Status {
  PAID = 'PAID',
  NOT_PAID = 'NOT-PAID',

}

export enum PaymentType {
  ON_ORDER = 'ON-ORDER',
  PRE_FULFILLMENT = 'PRE-FULFILLMENT',
  ON_FULFILLMENT = 'ON-FULFILLMENT',
  POST_FULFILLMENT = "POST-FULFILLMENT"

}

class AddressInfo {
  @ApiProperty({
    type: String
  })
  door: String
  @ApiProperty({
    type: String
  })
  country: String
  @ApiProperty({
    type: String
  })
  city: String
  @ApiProperty({
    type: String
  })
  area_code: String
  @ApiProperty({
    type: String
  })
  state: String
  @ApiProperty({
    type: String
  })
  building: String
  @ApiProperty({
    type: String
  })
  name: String
  @ApiProperty({
    type: String
  })
  locality: String
}

class SelectPaymentParams {
  @ApiProperty({
    type: String
  })
  transactionId: String

  @ApiProperty({
    type: String
  })
  amount: String
  @ApiProperty({
    type: String
  })
  currency: String
  @ApiProperty({
    type: String
  })
  transaction_status: String
}

export class SelectPayment {
  @ApiProperty({
    type: String
  })
  id: String
  @ApiProperty({
    type: String
  })
  @IsEnum(PaymentType)
  type: PaymentType
  @ApiProperty({
    type: SelectPaymentParams
  })
  params: SelectPaymentParams
  @IsEnum(Status)
  status: Status
}

class SelectProvider {
  @ApiProperty({
    example: 'deb909f2-8369-49fc-b30b-231b2ec4b874',
    type: String
  })
  id: String;
}

class item {
  @ApiProperty({
    example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70',
    type: String
  })
  id: String;
}

class ConfirmOrder {
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

class ConfirmRequestMessageDto {
  @ApiProperty({
    type: ConfirmOrder
  })
  order: ConfirmOrder
}

class ConfirmContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'confirm',
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
    description: 'domain is required'
  })
  bap_id?: string
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

export class ConfimRequestDto {
  @ApiProperty({
    type: ConfirmContext
  })
  context: ConfirmContext

  @ApiProperty({
    type: ConfirmRequestMessageDto
  })
  message: ConfirmRequestMessageDto
}

export class ListConfirmRequestDto {
  @ApiProperty({
    type: [ConfimRequestDto]
  })
  confirmRequestDto: ConfimRequestDto[]

  @ApiProperty({
    type: String,
    example: 12345
  })
  userId: string
}








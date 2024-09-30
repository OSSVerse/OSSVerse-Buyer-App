import { ApiProperty } from '@nestjs/swagger';

// Location DTO
class CityDto {
  @ApiProperty({ example: 'Bengaluru' })
  name: string;

  @ApiProperty({ example: 'std:080' })
  code: string;
}

class CountryDto {
  @ApiProperty({ example: 'India' })
  name: string;

  @ApiProperty({ example: 'IND' })
  code: string;
}

class LocationDto {
  @ApiProperty({ type: CountryDto })
  country: CountryDto;

  @ApiProperty({ type: CityDto })
  city: CityDto;
}

// Context DTO
class ContextDtoConfirm {
  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'confirm' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:02:31.804Z' })
  timestamp: string;

  @ApiProperty({ example: '92051bc8-5fd2-43bd-8dce-5d0270dcda30' })
  message_id: string;

  @ApiProperty({ example: 'ead489b8-81de-49a4-baf6-8d8de7eabf32' })
  transaction_id: string;

  @ApiProperty({ example: 'Software Assurance' })
  domain: string;

  @ApiProperty({ example: '1.1.0' })
  version: string;

  @ApiProperty({ example: 'bap.ossverse.com' })
  bap_id: string;

  @ApiProperty({ example: 'http://bap.ossverse.com' })
  bap_uri: string;

  @ApiProperty({ type: LocationDto })
  location: LocationDto;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;
}

// Item Descriptor DTO
class ItemDescriptorDto {
  @ApiProperty({ example: 'RomRaider' })
  name: string;
}

// Item Price DTO
class ItemPriceDto {
  @ApiProperty({ example: 'INR' })
  currency: string;

  @ApiProperty({ example: '11000' })
  value: string;
}

// Quantity DTO
class QuantityDto {
  @ApiProperty({ example: 1 })
  count: number;

  // @ApiProperty({ example: { unit: 'Unit-count', value: 1 } })
  // measure: { unit: string; value: number };
}

class QuantityConfirmDto {
  @ApiProperty({ example: 1 })
  count: number;

  @ApiProperty({ example: { unit: 'Unit-count', value: 1 } })
  measure: { unit: string; value: number };
}

// Item DTO
class ItemConfirmDto {
  @ApiProperty({ type: ItemDescriptorDto })
  descriptor: ItemDescriptorDto;

  @ApiProperty({ type: ItemPriceDto })
  price: ItemPriceDto;

  @ApiProperty({ example: 'OSS Project' })
  category_id: string;

  @ApiProperty({ type: QuantityConfirmDto })
  quantity: QuantityConfirmDto;
}

// Billing DTO
class BillingDto {
  @ApiProperty({ example: '22AAAAA0000A1Z5' })
  tax_number: string;

  @ApiProperty({ example: '0987654321' })
  phone: string;

  @ApiProperty({ example: 'openfort@example.com' })
  email: string;

  @ApiProperty({ example: '2024-09-25T10:02:32.285Z' })
  created_at: string;

  @ApiProperty({ example: '2024-09-25T10:02:32.285Z' })
  updated_at: string;
}

// Fulfillment DTO
class FulfillmentDto {
  // You can define fields for fulfillments if required, otherwise keep it empty
}

class PriceConfirmDto {
  @ApiProperty({ type: ItemPriceDto })
  price: ItemPriceDto;
}

// Quote Breakup DTO
class QuoteBreakupDto {
  @ApiProperty({ type: PriceConfirmDto })
  item: PriceConfirmDto;

  @ApiProperty({ type: ItemPriceDto })
  price: ItemPriceDto;

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: QuantityDto })
  '@ondc/org/item_quantity': QuantityDto;
}

// Quote DTO
class QuoteDto {
  @ApiProperty({ example: 'P1D' })
  ttl: string;

  @ApiProperty({ type: ItemPriceDto })
  price: ItemPriceDto;

  @ApiProperty({ type: [QuoteBreakupDto] })
  breakup: QuoteBreakupDto[];
}

// Payment Settlement Detail DTO
class SettlementDetailDto {
  @ApiProperty({ example: 'Bank of Springfield' })
  bank_name: string;

  @ApiProperty({ example: 'Main Branch' })
  branch_name: string;

  @ApiProperty({ example: 'neft' })
  settlement_type: string;

  @ApiProperty({ example: 'openfort' })
  beneficiary_name: string;

  @ApiProperty({ example: 'sale-amount' })
  settlement_phase: string;

  @ApiProperty({ example: 'IFSC0001234' })
  settlement_ifsc_code: string;

  @ApiProperty({ example: 'seller-app' })
  settlement_counterparty: string;

  @ApiProperty({ example: '1234567890' })
  settlement_bank_account_no: string;
}

// Payment DTO
class PaymentDto {
  @ApiProperty({ type: [SettlementDetailDto] })
  '@ondc/org/settlement_details': SettlementDetailDto[];

  @ApiProperty({ example: 'Percent' })
  '@ondc/org/buyer_app_finder_fee_type': string;

  @ApiProperty({ example: '3.0' })
  '@ondc/org/buyer_app_finder_fee_amount': string;
}

class ProvideConfirmDto {
  @ApiProperty({ example: 'ceae624e-be6a-4ec5-b483-b23b3a715aa5' })
  id: string;
}

// Order DTO
class OrderDto {
  @ApiProperty({ example: 'order-$2a$10$jsQRdlp0lLd6C4B7.PiItuu/y3tueCuIIKmyRawbKqEB8ZToOnSxG' })
  id: string;

  @ApiProperty({ example: 'Created' })
  state: string;

  @ApiProperty({ type: ProvideConfirmDto })  // Create a separate DTO for Provider
  provider: { id: ProvideConfirmDto };

  @ApiProperty({ type: [ItemConfirmDto] })
  items: ItemConfirmDto[];

  @ApiProperty({ type: BillingDto })
  billing: BillingDto;

  @ApiProperty({ type: [] })
  fulfillments: [];

  @ApiProperty({ type: QuoteDto })
  quote: QuoteDto;

  @ApiProperty({ type: PaymentDto })
  payment: PaymentDto;

  @ApiProperty({ example: '2024-09-25T10:02:32.285Z' })
  created_at: string;

  @ApiProperty({ example: '2024-09-25T10:02:32.285Z' })
  updated_at: string;

  @ApiProperty({ example: 'DEFAULT' })
  type: string;

  @ApiProperty({ example: '034764' })
  displayId: string;
}

class ContextDtoRConfirm {
  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'on_confirm' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:02:31.804Z' })
  timestamp: string;

  @ApiProperty({ example: '92051bc8-5fd2-43bd-8dce-5d0270dcda30' })
  message_id: string;

  @ApiProperty({ example: 'ead489b8-81de-49a4-baf6-8d8de7eabf32' })
  transaction_id: string;

  @ApiProperty({ example: 'Software Assurance' })
  domain: string;

  @ApiProperty({ example: '1.1.0' })
  version: string;

  @ApiProperty({ example: 'bap.ossverse.com' })
  bap_id: string;

  @ApiProperty({ example: 'http://bap.ossverse.com' })
  bap_uri: string;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;
}

class MessageConfirmDto {
  @ApiProperty({ type: OrderDto })
  order: OrderDto;
}

// Response DTO
class ResponseDto {
  @ApiProperty({ type: ContextDtoRConfirm })
  context: ContextDtoRConfirm;

  @ApiProperty({ type: MessageConfirmDto })
  message: MessageConfirmDto;
}

// Confirm Message DTO
class ConfirmMessageDto {
  @ApiProperty({ type: ContextDtoConfirm })
  context: ContextDtoConfirm;

  @ApiProperty({ type: [ResponseDto] })
  responses: ResponseDto[];
}

// // Main Confirm DTO
// class ConfirmDto {
//   @ApiProperty({ type: ContextDtoConfirm })
//   context: ContextDtoConfirm;

//   @ApiProperty({ type: ConfirmMessageDto })
//   message: ConfirmMessageDto;
// }

// Main DTO for the Confirm API Response
export class ConfirmResponseDto {
  @ApiProperty({ type: ContextDtoConfirm })
  context: ContextDtoConfirm;

  @ApiProperty({ type: ConfirmMessageDto })
  message: ConfirmMessageDto;
}

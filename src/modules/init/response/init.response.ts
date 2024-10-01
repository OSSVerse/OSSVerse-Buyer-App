import { ApiProperty } from '@nestjs/swagger';

class InitCountry {
  @ApiProperty({ example: 'India' })
  name: string;

  @ApiProperty({ example: 'IND' })
  code: string;
}

class InitCity {
  @ApiProperty({ example: 'Bengaluru' })
  name: string;

  @ApiProperty({ example: 'std:080' })
  code: string;
}

class InitLocation {
  @ApiProperty({ type: InitCountry })
  country: InitCountry;

  @ApiProperty({ type: InitCity })
  city: InitCity;
}

class InitContextDto {
  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'init' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:01:49.632Z' })
  timestamp: string;

  @ApiProperty({ example: '5c1bab20-f84a-4bac-97f7-ce8f162818c8' })
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

  @ApiProperty({ type: InitLocation })
  location: InitLocation;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;
}

class OnInitPrice {
  @ApiProperty({ example: '11000' })
  value: string;

  @ApiProperty({ example: 'INR' })
  currency: string;
}

class OnInitAvailable {
  @ApiProperty({ type: String, example: 1 })
  count: string;
}
class OnInitMaximum {
  @ApiProperty({ type: String, example: 1 })
  count: string;
}

class OnInitQuantity {
  @ApiProperty({ type: OnInitAvailable })
  available: OnInitAvailable;

  @ApiProperty({ type: OnInitMaximum })
  maximum: OnInitMaximum;
}

class OnPriceIntemInit {
  @ApiProperty({ type: OnInitPrice })
  price: OnInitPrice;

  @ApiProperty({ type: OnInitQuantity })
  quantity: OnInitQuantity;
}

class InitItem {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  id: string;
}

class InitBilling {
  @ApiProperty({ example: 'Neeraj Kumar' })
  name: string;

  @ApiProperty({ example: 'Apt 303, Maple Towers, Richmond Road, 560001' })
  address: string;

  @ApiProperty({ type: Object, example: { name: 'Jurong East' } })
  state: { name: string };

  @ApiProperty({ type: Object, example: { name: 'Jurong East' } })
  city: { name: string };

  @ApiProperty({ example: 'dummy-neeraj@gmail.com' })
  email: string;

  @ApiProperty({ example: '8197511885' })
  phone: string;
}

class InitItemCatalog {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ example: { count: 1 } })
  '@ondc/org/item_quantity': { count: number };

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ example: { value: '11000', currency: 'INR' } })
  price: { value: string; currency: string };

  @ApiProperty({type: OnPriceIntemInit})
  item: OnPriceIntemInit;
}

class InitCatalog {
  @ApiProperty({ type: [InitItemCatalog] })
  items: InitItemCatalog[];
}

class ItemQuantity {
  @ApiProperty({ example: 1 })
  count: number;
}

export class InitBreakup {
  @ApiProperty({ example: 'e2b41750-a165-4a42-9255-f02966401783' })
  '@ondc/org/item_id': string;

  @ApiProperty({ type: ItemQuantity })
  '@ondc/org/item_quantity': ItemQuantity;

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: OnInitPrice })
  price: OnInitPrice;

  @ApiProperty({ type: OnPriceIntemInit })
  item: OnPriceIntemInit;
}

class InitQuote {
  @ApiProperty({ type: Object, example: { value: '11000', currency: 'INR' } })
  price: { value: string; currency: string };

  @ApiProperty({ type: [InitBreakup] })
  breakup: InitBreakup[];

  @ApiProperty({ example: 'P1D' })
  ttl: string;
}

class InitProvider {
  @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
  id: string;
}

class InitSettlementDetail {
  @ApiProperty({ example: 'seller-app' })
  settlement_counterparty: string;

  @ApiProperty({ example: 'sale-amount' })
  settlement_phase: string;

  @ApiProperty({ example: 'neft' })
  settlement_type: string;

  @ApiProperty({ example: '1234567890' })
  settlement_bank_account_no: string;

  @ApiProperty({ example: 'IFSC0001234' })
  settlement_ifsc_code: string;

  @ApiProperty({ example: 'openfort' })
  beneficiary_name: string;

  @ApiProperty({ example: 'Bank of Springfield' })
  bank_name: string;

  @ApiProperty({ example: 'Main Branch' })
  branch_name: string;
}

class InitSettlementDetails {
  @ApiProperty({ example: 'seller-app' })
  settlement_counterparty: string;

  @ApiProperty({ example: 'sale-amount' })
  settlement_phase: string;

  @ApiProperty({ example: 'neft' })
  settlement_type: string;

  @ApiProperty({ example: '1234567890' })
  settlement_bank_account_no: string;

  @ApiProperty({ example: 'IFSC0001234' })
  settlement_ifsc_code: string;

  @ApiProperty({ example: 'openfort' })
  beneficiary_name: string;

  @ApiProperty({ example: 'Bank of Springfield' })
  bank_name: string;

  @ApiProperty({ example: 'Main Branch' })
  branch_name: string;
}

class InitPayment {
  @ApiProperty({ example: 'Percent' })
  '@ondc/org/buyer_app_finder_fee_type': string;

  @ApiProperty({ example: '3.0' })
  '@ondc/org/buyer_app_finder_fee_amount': string;

  @ApiProperty({ type: [InitSettlementDetails] })
  '@ondc/org/settlement_details': InitSettlementDetails[];
}

class OnInitResOrder {
  @ApiProperty({ type: InitProvider })
  provider: InitProvider;

  @ApiProperty({ type: {} }) // Consider defining a proper DTO if possible
  provider_location: {};

  @ApiProperty({ type: [InitItem] })
  items: InitItem[];

  @ApiProperty({ type: InitBilling })
  billing: InitBilling;

  @ApiProperty({ type: [] })
  fulfillments: [];

  @ApiProperty({ type: InitQuote })
  quote: InitQuote;

  @ApiProperty({ type: InitPayment })
  payment: InitPayment;

  @ApiProperty({ example: 'DEFAULT' })
  type: string;
}

class OnInitResMessage {
  @ApiProperty({ type: OnInitResOrder })
  order: OnInitResOrder;
}

class OnInitContextResDto {

  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'on_init' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:01:49.632Z' })
  timestamp: string;

  @ApiProperty({ example: '5c1bab20-f84a-4bac-97f7-ce8f162818c8' })
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

  @ApiProperty({ type: InitLocation })
  location: InitLocation;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;

  @ApiProperty({ example: 'IND' })
  country: string;

  @ApiProperty({ example: 'std:080' })
  city: string;
}

class OnInitRes {
  @ApiProperty({ type: OnInitContextResDto })
  context: OnInitContextResDto;

  @ApiProperty({ type: OnInitResMessage })
  message: OnInitResMessage;
}

class InitCatalogsItems {
  @ApiProperty({ type: InitContextDto })
  context: InitContextDto;

  @ApiProperty({ type: [OnInitRes] })
  responses: OnInitRes[];
}

class InitCatalogs {
  @ApiProperty({ type: InitCatalogsItems })
  catalogs: InitCatalogsItems;
}

export class InitCatalogResponse {
  @ApiProperty({ type: InitContextDto })
  context: InitContextDto;

  @ApiProperty({ type: InitCatalogs })
  message: InitCatalogs;
}

import { ApiProperty } from "@nestjs/swagger";


class GetQuoteCountryDto {
  @ApiProperty({ example: 'India' })
  name: string;

  @ApiProperty({ example: 'IND' })
  code: string;
}

class GetQuoteCityDto {
  @ApiProperty({ example: 'Bengaluru' })
  name: string;

  @ApiProperty({ example: 'std:080' })
  code: string;
}

class GetQuoteLocationDto {
  @ApiProperty({ type: GetQuoteCountryDto })
  country: GetQuoteCountryDto;

  @ApiProperty({ type: GetQuoteCityDto })
  city: GetQuoteCityDto;
}

// Context DTO
class SelectGetQuoteContextDto {
  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'select' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:00:45.702Z' })
  timestamp: string;

  @ApiProperty({ example: 'a9881f26-744a-4b26-9d03-c8e9c86cee98' })
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

  @ApiProperty({ type: GetQuoteLocationDto })
  location: GetQuoteLocationDto;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;
}

class SelectGetOrdersProviderDto {
  @ApiProperty({ type: String, example: 'ceae624e-be6a-4ec5-b483-b23b3a715aa5' })
  id: string;
}

class DescriptorDto {
  @ApiProperty({ type: String, example: 'Non-serviceable' })
  code: string;
}

class SelectGetOrdersStateDto {
  @ApiProperty({ type: DescriptorDto })
  descriptor: DescriptorDto;
}

class SelectGetOrdersFulfillmentsDto {

  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: SelectGetOrdersProviderDto })
  provider: SelectGetOrdersProviderDto;

  @ApiProperty({ type: String, example: 'Openfort' })
  "@ondc/org/provider_name": string;

  @ApiProperty({ type: Boolean, example: false })
  tracking: boolean;

  @ApiProperty({ type: String, example: 'Logistic type - dummy' })
  "@ondc/org/category": string;

  @ApiProperty({ type: String, example: 'P1D' })
  "@ondc/org/TAT": string;

  @ApiProperty({ type: String, example: 'ceae624e-be6a-4ec5-b483-b23b3a715aa5' })
  "provider_id": string;

  @ApiProperty({ type: String, example: 'Delivery' })
  type: string;

  @ApiProperty({ type: SelectGetOrdersStateDto })
  state: SelectGetOrdersStateDto;

  @ApiProperty({ type: String, example: 'fulfilment-end' })
  end: string;
}

class SelectGetOrdersPriceDto {
  @ApiProperty({ type: Number, example: 11000 })
  value: number;
  @ApiProperty({ type: String, example: 'INR' })
  currency: string;
}

class SelectGetOrdersCountDto {
  @ApiProperty({ type: Number, example: 1 })
  count: number;
}

class SelectGetOrdersQuantityDto {
  @ApiProperty({ type: SelectGetOrdersCountDto })
  available: SelectGetOrdersCountDto;

  @ApiProperty({ type: SelectGetOrdersCountDto })
  maximum: SelectGetOrdersCountDto;
}

class SelectGetOrdersItemDto {
  @ApiProperty({ type: SelectGetOrdersPriceDto })
  price: SelectGetOrdersPriceDto;

  @ApiProperty({ type: SelectGetOrdersQuantityDto })
  quantity: SelectGetOrdersQuantityDto;
}

class SelectGetOrdersBreakupDto {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ type: {} })
  '@ondc/org/item_quantity': {};

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: SelectGetOrdersPriceDto })
  price: SelectGetOrdersPriceDto;

  @ApiProperty({ type: SelectGetOrdersItemDto })
  item: SelectGetOrdersItemDto
}

class SelectGetOrdersQuoteDto {
  @ApiProperty({ type: SelectGetOrdersPriceDto })
  price: SelectGetOrdersPriceDto;


  @ApiProperty({ type: [SelectGetOrdersBreakupDto] })
  breakup: SelectGetOrdersBreakupDto[]

  @ApiProperty({ type: String, example: 'P1D' })
  ttl: string

}

class GetOrdersItemDto {
  @ApiProperty({ type: String, example: 'e2b41750-a165-4a42-9255-f02966401783' })
  id: string
  @ApiProperty({ type: String, example: '1' })
  fulfillment_id: string
}

class SelectGetOrdersContentDto {
  @ApiProperty({ type: SelectGetOrdersProviderDto })
  provider: SelectGetOrdersProviderDto;

  @ApiProperty({ type: SelectGetOrdersFulfillmentsDto })
  fulfillments: SelectGetOrdersFulfillmentsDto;

  @ApiProperty({ type: SelectGetOrdersQuoteDto })
  quote: SelectGetOrdersQuoteDto;

  @ApiProperty({ type: [GetOrdersItemDto] })
  items: GetOrdersItemDto[];

  @ApiProperty({ type: String, example: 'DEFAULT' })
  type: string;
}

class SelectGetOrdersDto {

  @ApiProperty({ type: SelectGetOrdersContentDto })
  order: SelectGetOrdersContentDto;
}

class SelectGetQuotecatalogsDto {
  @ApiProperty({ type: SelectGetOrdersDto })
  catalogs: SelectGetOrdersDto;
}

// Response DTO
export class GetQuoteResponseDto {
  @ApiProperty({ type: SelectGetQuoteContextDto })
  context: SelectGetQuoteContextDto;

  @ApiProperty({ type: SelectGetQuotecatalogsDto })
  message: SelectGetQuotecatalogsDto;
}

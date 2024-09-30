import { ApiProperty } from "@nestjs/swagger";

// Location DTO
class GetQuoteCityDto {
  @ApiProperty({ example: 'Bengaluru' })
  name: string;

  @ApiProperty({ example: 'std:080' })
  code: string;
}

class GetQuoteCountryDto {
  @ApiProperty({ example: 'India' })
  name: string;

  @ApiProperty({ example: 'IND' })
  code: string;
}

class GetQuoteLocationDto {
  @ApiProperty({ type: GetQuoteCountryDto })
  country: GetQuoteCountryDto;

  @ApiProperty({ type: GetQuoteCityDto })
  city: GetQuoteCityDto;
}

// State Descriptor DTO
class GetQuoteStateDescriptorDto {
  @ApiProperty({ example: 'Non-serviceable' })
  code: string;
}

// State DTO
class GetQuoteStateDto {
  @ApiProperty({ type: GetQuoteStateDescriptorDto })
  descriptor: GetQuoteStateDescriptorDto;
}

// Quantity DTO
class GetQuoteQuantityDto {
  @ApiProperty({ type: Object, description: 'Available quantity' })
  available: { count: number };

  @ApiProperty({ type: Object, description: 'Maximum quantity' })
  maximum: { count: number };
}

// Price DTO
class GetQuotePriceDto {
  @ApiProperty({ example: '11000' })
  value: string;

  @ApiProperty({ example: 'INR' })
  currency: string;
}

// Item Breakup DTO
class GetQuoteItemBreakupDto {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ type: Object })
  '@ondc/org/item_quantity': object;

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: GetQuotePriceDto })
  price: GetQuotePriceDto;

  @ApiProperty({ type: Object })
  item: {
    price: {
      "currency": "INR",
      "value": "11000"
    };
    quantity: {
      "available": {
        "count": 1
      },
      "maximum": {
        "count": 1
      }
    };
  };
}

// Provider DTO
class GetQuoteProviderDto {
  @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
  id: string;
}

// Item DTO
class GetQuoteItemDto {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  id: string;

  @ApiProperty({ example: '1' })
  fulfillment_id: string;
}

class PriceQuantity {
  @ApiProperty({ type: GetQuotePriceDto })
  price: GetQuotePriceDto;

  @ApiProperty({ type: GetQuoteQuantityDto })
  quantity: GetQuoteQuantityDto;
}

// Breakup DTO
class GetQuoteBreakupDto {
  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ type: Object })
  '@ondc/org/item_quantity': object;

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: GetQuotePriceDto })
  price: GetQuotePriceDto;

  @ApiProperty({ type: PriceQuantity })
  item: PriceQuantity;
}

// Quote DTO
class GetQuoteQuoteDto {
  @ApiProperty({ type: GetQuotePriceDto })
  price: GetQuotePriceDto;

  @ApiProperty({ type: [GetQuoteBreakupDto] })
  breakup: GetQuoteBreakupDto[];

  @ApiProperty({ example: 'P1D' })
  ttl: string;
}

// Fulfillment DTO
class GetQuoteFulfillmentDto {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Openfort', description: 'Provider name' })
  '@ondc/org/provider_name': string;

  @ApiProperty({ example: false })
  tracking: boolean;

  @ApiProperty({ example: 'Logistic type - dummy' })
  '@ondc/org/category': string;

  @ApiProperty({ example: 'P1D' })
  '@ondc/org/TAT': string;

  @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
  provider_id: string;

  @ApiProperty({ example: 'Delivery' })
  type: string;

  @ApiProperty({ type: Object })
  state: {
    descriptor: {
      code: string;
    };
  };

  @ApiProperty({ example: 'fulfilment-end' })
  end: string;
}

// Order DTO
class GetQuoteOrderDto {
  @ApiProperty({ type: GetQuoteProviderDto })
  provider: GetQuoteProviderDto;

  @ApiProperty({ type: [GetQuoteFulfillmentDto] })
  fulfillments: GetQuoteFulfillmentDto[];

  @ApiProperty({ type: GetQuoteQuoteDto })
  quote: GetQuoteQuoteDto;

  @ApiProperty({ type: [GetQuoteItemDto] })
  items: GetQuoteItemDto[];

  @ApiProperty({ example: 'DEFAULT' })
  type: string;
}

// Catalog Message DTO
class GetQuoteCatalogStatusMessageDto {
  @ApiProperty({ type: GetQuoteOrderDto })
  order: GetQuoteOrderDto;
}

// Context DTO
class GetQuoteContextDto {
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

class GetQuotecatalogsDto {
  @ApiProperty({ type: GetQuoteCatalogStatusMessageDto })
  catalogs: GetQuoteCatalogStatusMessageDto;

}

// Response DTO
export class GetQuoteResponseDto {
  @ApiProperty({ type: GetQuoteContextDto })
  context: GetQuoteContextDto;

  @ApiProperty({ type: GetQuotecatalogsDto })
  message: GetQuotecatalogsDto;
}

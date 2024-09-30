import { ApiProperty } from '@nestjs/swagger';

class LocationStatusDto {
  @ApiProperty({
    type: Object,
    example: {
      country: { name: 'India', code: 'IND' },
      city: { name: 'Bengaluru', code: 'std:080' },
    },
  })
  country: {
    name: string;
    code: string;
  };

  @ApiProperty({
    type: Object,
    example: {
      name: 'Bengaluru',
      code: 'std:080',
    },
  })
  city: {
    name: string;
    code: string;
  };
}

class ProviderStatusDto {
  @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
  id: string;

  @ApiProperty({ type: [LocationStatusDto], example: [{ country: { name: 'India', code: 'IND' }, city: { name: 'Bengaluru', code: 'std:080' } }] })
  locations: LocationStatusDto[];
}

class PriceStatusDto {
  @ApiProperty({ example: 'INR' })
  currency: string;

  @ApiProperty({ example: '11000' })
  value: string;
}

class ItemStatusDto {
  @ApiProperty({ type: Object, example: { name: 'RomRaider' } })
  descriptor: {
    name: string;
  };

  @ApiProperty({ type: PriceStatusDto })
  price: PriceStatusDto;

  @ApiProperty({ example: 'OSS Project' })
  category_id: string;

  @ApiProperty({
    type: Object,
    example: {
      count: 1,
      measure: { unit: 'Unit-count', value: 1 },
    },
  })
  quantity: {
    count: number;
    measure: {
      unit: string;
      value: number;
    };
  };
}

class BillingStatusDto {
  @ApiProperty({ example: '22AAAAA0000A1Z5' })
  tax_number: string;

  @ApiProperty({ example: '0987654321' })
  phone: string;

  @ApiProperty({ example: 'openfort@example.com' })
  email: string;

  @ApiProperty({ example: '2024-09-25T04:43:25.726Z' })
  created_at: string;

  @ApiProperty({ example: '2024-09-25T04:43:25.726Z' })
  updated_at: string;
}

class FulfillmentStatusDto {
  // Define fields as per your requirements (empty array in this case)
}

class ItemPriceStatusDto {
  @ApiProperty({ type: ItemPriceStatusDto })
  price: ItemPriceStatusDto;
}

class QuoteBreakupStatusDto {
  @ApiProperty({ type: PriceStatusDto })
  item: PriceStatusDto;

  @ApiProperty({ type: PriceStatusDto })
  price: PriceStatusDto;

  @ApiProperty({ example: 'RomRaider' })
  title: string;

  @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
  '@ondc/org/item_id': string;

  @ApiProperty({ example: 'item' })
  '@ondc/org/title_type': string;

  @ApiProperty({ type: Object, example: { count: 1 } })
  '@ondc/org/item_quantity': {
    count: number;
  };
}

class QuoteStatusDto {
  @ApiProperty({ example: 'P1D' })
  ttl: string;

  @ApiProperty({ type: PriceStatusDto })
  price: PriceStatusDto;

  @ApiProperty({ type: [QuoteBreakupStatusDto] })
  breakup: QuoteBreakupStatusDto[];
}

class PaymentStatusDto {
  @ApiProperty({ type: [Object], example: [{ bank_name: 'Bank of Springfield', branch_name: 'Main Branch', settlement_type: 'neft', beneficiary_name: 'openfort', settlement_phase: 'sale-amount', settlement_ifsc_code: 'IFSC0001234', settlement_counterparty: 'seller-app', settlement_bank_account_no: '1234567890' }] })
  '@ondc/org/settlement_details': Array<{
    bank_name: string;
    branch_name: string;
    settlement_type: string;
    beneficiary_name: string;
    settlement_phase: string;
    settlement_ifsc_code: string;
    settlement_counterparty: string;
    settlement_bank_account_no: string;
  }>;

  @ApiProperty({ example: 'Percent' })
  '@ondc/org/buyer_app_finder_fee_type': string;

  @ApiProperty({ example: '3.0' })
  '@ondc/org/buyer_app_finder_fee_amount': string;
}

class OrderStatusDto {
  @ApiProperty({ type: ProviderStatusDto })
  provider: ProviderStatusDto;

  @ApiProperty({ example: 'Created' })
  state: string;

  @ApiProperty({ type: [ItemStatusDto] })
  items: ItemStatusDto[];

  @ApiProperty({ type: BillingStatusDto })
  billing: BillingStatusDto;

  @ApiProperty({ type: [] })
  fulfillments: [];

  @ApiProperty({ type: QuoteStatusDto })
  quote: QuoteStatusDto;

  @ApiProperty({ type: PaymentStatusDto })
  payment: PaymentStatusDto;

  @ApiProperty({ example: 'order-$2a$10$XkfeMc8YMYALPefE8b0E6OciMD5DP33c2RU4RAnEy4/z69Skp9gfG' })
  id: string;

  @ApiProperty({ example: '2024-09-25T10:03:05.819Z' })
  created_at: string;

  @ApiProperty({ example: '2024-09-25T10:03:05.819Z' })
  updated_at: string;

  @ApiProperty({ example: 'DEFAULT' })
  type: string;

  @ApiProperty({ example: 'order-$2a$10$XkfeMc8YMYALPefE8b0E6OciMD5DP33c2RU4RAnEy4/z69Skp9gfG' })
  displayId: string;
}

class MessageStatusDto {
  @ApiProperty({ type: OrderStatusDto })
  order: OrderStatusDto;
}

class ContextStatusDto {
  @ApiProperty({ example: 'PT10M' })
  ttl: string;

  @ApiProperty({ example: 'status' })
  action: string;

  @ApiProperty({ example: '2024-09-25T10:03:05.819Z' })
  timestamp: string;

  @ApiProperty({ example: 'd1ddd1ff-57e8-484e-a1aa-0ec1cccda869' })
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

  @ApiProperty({ type: LocationStatusDto })
  location: LocationStatusDto;

  @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
  bpp_id: string;

  @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
  bpp_uri: string;
}

export class MainResponseStatusDto {
  @ApiProperty({ type: ContextStatusDto })
  context: ContextStatusDto;

  @ApiProperty({ type: MessageStatusDto })
  message: MessageStatusDto;

  @ApiProperty({ example: '' })
  qr_url: string;
}

import { ApiProperty } from "@nestjs/swagger";


class LocationOrderDto {
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

class ContextOrderDto {
    @ApiProperty({ example: 'PT10M' })
    ttl: string;

    @ApiProperty({ example: 'confirm' })
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

    @ApiProperty({ type: LocationOrderDto })
    location: LocationOrderDto;

    @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
    bpp_id: string;

    @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
    bpp_uri: string;
}

class ContextOnStatusDto {
    @ApiProperty({ example: 'PT10M' })
    ttl: string;

    @ApiProperty({ example: 'on_status' })
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

    @ApiProperty({ type: LocationOrderDto })
    location: LocationOrderDto;

    @ApiProperty({ example: 'openfort-oasp.ossverse.com' })
    bpp_id: string;

    @ApiProperty({ example: 'http://openfort-oasp.ossverse.com' })
    bpp_uri: string;
}

class ProviderStatusDto {
    @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
    id: string;

    @ApiProperty({ type: [LocationOrderDto], example: [{ country: { name: 'India', code: 'IND' }, city: { name: 'Bengaluru', code: 'std:080' } }] })
    locations: LocationOrderDto[];
}

class PriceOrderDto {
    @ApiProperty({ example: 'INR' })
    currency: string;

    @ApiProperty({ example: '11000' })
    value: string;
}

class ItemOrderDto {
    @ApiProperty({ type: Object, example: { name: 'RomRaider' } })
    descriptor: {
        name: string;
    };

    @ApiProperty({ type: PriceOrderDto })
    price: PriceOrderDto;

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

class QuoteBreakupStatusDto {
    @ApiProperty({ type: PriceOrderDto })
    item: PriceOrderDto;

    @ApiProperty({ type: PriceOrderDto })
    price: PriceOrderDto;

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

class BillingOrderDto {
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

class QuoteOrderDto {
    @ApiProperty({ example: 'P1D' })
    ttl: string;

    @ApiProperty({ type: PriceOrderDto })
    price: PriceOrderDto;

    @ApiProperty({ type: [QuoteBreakupStatusDto] })
    breakup: QuoteBreakupStatusDto[];
}

class PaymentOrderDto {
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

class OrderResStatusDto {
    @ApiProperty({ type: ProviderStatusDto })
    provider: ProviderStatusDto;

    @ApiProperty({ example: 'Created' })
    state: string;

    @ApiProperty({ type: [ItemOrderDto] })
    items: ItemOrderDto[];

    @ApiProperty({ type: BillingOrderDto })
    billing: BillingOrderDto;

    @ApiProperty({ type: [] })
    fulfillments: [];

    @ApiProperty({ type: QuoteOrderDto })
    quote: QuoteOrderDto;

    @ApiProperty({ type: PaymentOrderDto })
    payment: PaymentOrderDto;

    @ApiProperty({ example: 'order-$2a$10$XkfeMc8YMYALPefE8b0E6OciMD5DP33c2RU4RAnEy4/z69Skp9gfG' })
    id: string;

    @ApiProperty({ example: '2024-09-25T10:03:05.819Z' })
    created_at: string;

    @ApiProperty({ example: '2024-09-25T10:03:05.819Z' })
    updated_at: string;

    @ApiProperty({ example: 'DEFAULT' })
    type: string;
}

class ContextMessageOrderDto {
    @ApiProperty({ type: OrderResStatusDto })
    order: OrderResStatusDto;
}


class ResponsesOrderDto {

    @ApiProperty({ type: ContextOnStatusDto })
    context: ContextOnStatusDto;

    @ApiProperty({ type: ContextMessageOrderDto })
    message: ContextMessageOrderDto;
}

class MessageOrderDto {
    @ApiProperty({ type: ContextOrderDto })
    context: ContextOrderDto;

    @ApiProperty({ type: [ResponsesOrderDto] })
    responses: [ResponsesOrderDto];

}

class OrdersDto {
    @ApiProperty({ type: ContextOrderDto })
    context: ContextOrderDto;

    @ApiProperty({ type: MessageOrderDto })
    message: MessageOrderDto;
}


class OrderResponseDto {
    @ApiProperty({ type: String, example: '66fa79ab8ad1ad5a43f54f43' })
    id: String;

    @ApiProperty({ type: String, example: 'string' })
    userId: String;

    @ApiProperty({ type: String, example: 'a6b5ddb3-6171-4062-a4b7-b2de82c64e7a' })
    parentOrderId: String;

    @ApiProperty({ type: [OrdersDto] })
    orders: [OrdersDto];
}

export class MainResponseorderDto {
    @ApiProperty({ type: [OrderResponseDto] })
    orders: [OrderResponseDto];
}
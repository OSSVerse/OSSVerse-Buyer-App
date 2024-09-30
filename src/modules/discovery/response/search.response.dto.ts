import { ApiProperty } from "@nestjs/swagger";

class CityDto {
    @ApiProperty({
        type: String,
        description: 'City name',
        example: 'Bengaluru'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'City code',
        example: 'std:080'
    })
    code: string;
}

class CountryDto {
    @ApiProperty({
        type: String,
        description: 'Country name',
        example: 'India'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Country code',
        example: 'IND'
    })
    code: string;
}

class LocationDto {
    @ApiProperty({ type: CountryDto })
    country: CountryDto;

    @ApiProperty({ type: CityDto })
    city: CityDto;
}

class ContextDtoSearch {
    @ApiProperty({ example: 'PT10M' })
    ttl: string;

    @ApiProperty({ example: 'search' })
    action: string;

    @ApiProperty({ example: '2024-09-25T09:57:43.646Z' })
    timestamp: string;

    @ApiProperty({ example: '75d97144-07ae-4774-b293-818070796d5a' })
    message_id: string;

    @ApiProperty({ example: 'f42b02d0-aa63-46ee-8b3a-66a1ca934026' })
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
}

class ContextDto {
    @ApiProperty({ example: 'PT10M' })
    ttl: string;

    @ApiProperty({ example: 'on_search' })
    action: string;

    @ApiProperty({ example: '2024-09-25T09:57:44.532Z' })
    timestamp: string;

    @ApiProperty({ example: '75d97144-07ae-4774-b293-818070796d5a' })
    message_id: string;

    @ApiProperty({ example: 'f42b02d0-aa63-46ee-8b3a-66a1ca934026' })
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

    @ApiProperty({ type: LocationDto })
    location: LocationDto;

    // Optional: Include these fields if they are needed based on the JSON structure
    @ApiProperty({ example: 'IND' })
    country: string; // if you still need these fields directly in ContextDto

    @ApiProperty({ example: 'std:080' })
    city: string; // if you still need these fields directly in ContextDto
}



class CatalogDescriptorDto {
    @ApiProperty({ example: 'Openfort' })
    name: string;

    @ApiProperty({ example: '' })
    short_desc: string;

    @ApiProperty({ example: '' })
    long_desc: string;

    @ApiProperty({ type: [String], example: [null] })
    images: string[];
}

class PriceDto {
    @ApiProperty({ example: 'INR' })
    currency: string;

    @ApiProperty({ example: '11000' })
    value: string;

    @ApiProperty({ example: '11000' })
    maximum_value: string;
}

class QuantityDto {
    @ApiProperty({ type: Object })
    available: { count: string };

    @ApiProperty({ type: Object })
    maximum: { count: string };
}

class ItemDto {
    @ApiProperty({ example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70' })
    id: string;

    @ApiProperty({ type: CatalogDescriptorDto })
    descriptor: CatalogDescriptorDto;

    @ApiProperty({ type: PriceDto })
    price: PriceDto;

    // @ApiProperty({ type: QuantityDto })
    // quantity: QuantityDto;

    @ApiProperty({ example: 'PC0019' })
    code: string;

    @ApiProperty({ example: 'OSS Project' })
    category_id: string;

    @ApiProperty({ example: 'Assurance & Assessment Service' })
    sub_category_id: string;

    @ApiProperty({ example: 'NA' })
    description: string;

    @ApiProperty({ example: 'NA' })
    longDescription: string;

    // @ApiProperty({ example: '1' })
    // fulfillment_id: string;

    // @ApiProperty({ example: true })
    // matched: boolean;

    // @ApiProperty({ example: false, description: 'Indicates if the item is returnable' })
    // '@ondc/org/returnable': boolean;

    // @ApiProperty({ example: false, description: 'Indicates if the item is cancellable' })
    // '@ondc/org/cancellable': boolean;

    // @ApiProperty({ example: 'PT1H', description: 'Time to ship the item' })
    // '@ondc/org/time_to_ship': string;

    // @ApiProperty({ example: true, description: 'Indicates if seller pickup return is allowed' })
    // '@ondc/org/seller_pickup_return': boolean;

    // @ApiProperty({ type: Object, description: 'Mandatory requirements for veggies and fruits' })
    // '@ondc/org/mandatory_reqs_veggies_fruits': Record<string, any>;

    // @ApiProperty({
    //     type: Object,
    //     description: 'Statutory requirements for packaged commodities',
    //     properties: {
    //         common_or_generic_name_of_commodity: { type: 'string', example: 'RomRaider' }
    //     }
    // })
    // '@ondc/org/statutory_reqs_packaged_commodities': {
    //     common_or_generic_name_of_commodity: string;
    // };

    // @ApiProperty({
    //     type: Object,
    //     description: 'Statutory requirements for prepackaged food',
    //     properties: {
    //         brand_owner_FSSAI_license_no: { type: 'string', example: 'NA' },
    //         other_FSSAI_license_no: { type: 'string', example: 'NA' },
    //         importer_FSSAI_license_no: { type: 'string', example: 'NA' }
    //     }
    // })
    // '@ondc/org/statutory_reqs_prepackaged_food': {
    //     brand_owner_FSSAI_license_no: string;
    //     other_FSSAI_license_no: string;
    //     importer_FSSAI_license_no: string;
    // };

    // @ApiProperty({
    //     type: Object,
    //     description: 'Tags for categorizing the item',
    //     properties: {
    //         veg: { type: 'string', example: 'no' },
    //         non_veg: { type: 'string', example: 'yes' }
    //     }
    // })
    // tags: [];
}

class FulfillmentContactDto {
    @ApiProperty({ example: 'number', description: 'Contact phone number' })
    phone: string;

    @ApiProperty({ example: 'emailID', description: 'Contact email address' })
    email: string;
}

class TagDto {
    @ApiProperty({ example: 'serviceability', description: 'Code for the tag' })
    code: string;

    @ApiProperty({ example: '', description: 'List associated with the tag' })
    list: string;
}

class Fulfillmentcontact {
    @ApiProperty({ type: FulfillmentContactDto })
    contact: FulfillmentContactDto;
}

class ProviderDto {
    @ApiProperty({ example: 'deb909f2-8369-49fc-b30b-231b2ec4b874' })
    id: string;

    @ApiProperty({ type: CatalogDescriptorDto })
    descriptor: CatalogDescriptorDto;

    // @ApiProperty({ type: Object })
    // time: { label: string; timestamp: string };

    // @ApiProperty({ type: [Object] })
    // locations: any[];

    // @ApiProperty({ example: 'PT24H' })
    // ttl: string;

    @ApiProperty({ type: [ItemDto] })
    items: ItemDto[];

    @ApiProperty({ type: [Fulfillmentcontact], description: 'List of fulfillments offered by the provider' })
    fulfillments: Fulfillmentcontact[];

    @ApiProperty({ type: [] })
    tags: [];

    @ApiProperty({ example: '12345678901234', description: 'FSSAI license number of the provider' })
    '@ondc/org/fssai_license_no': string;
}

class FulfillmentDto {
    @ApiProperty({ example: '1' })
    id: string;

    @ApiProperty({ example: 'OASP Service Delivery' })
    type: string;
}

// Define the message structure in a separate class
class CatalogMessageDto {
    @ApiProperty({ type: [FulfillmentDto], description: 'Available fulfillment options' })
    'bpp/fulfillments': FulfillmentDto[];

    @ApiProperty({ type: CatalogDescriptorDto })
    'bpp/descriptor': CatalogDescriptorDto;

    @ApiProperty({ type: [ProviderDto] })
    'bpp/providers': ProviderDto[];
}

const fulfillments: FulfillmentDto[] = [
    { id: '1', type: 'Delivery' },
    { id: '2', type: 'Self-Pickup' },
    { id: '3', type: 'Delivery and Self-Pickup' },
];

const catalogMessage = new CatalogMessageDto();
catalogMessage['bpp/fulfillments'] = fulfillments;

class CatalogDto {
    @ApiProperty({ type: ContextDto })
    context: ContextDto;

    @ApiProperty({ type: CatalogMessageDto }) // Reference the new class here
    message: CatalogMessageDto;
}


class SearchResponseMessageDto {
    @ApiProperty({ type: [CatalogDto] })
    catalogs: CatalogDto[];
}

export class SearchResponseDto {
    @ApiProperty({ type: ContextDtoSearch })
    context: ContextDtoSearch;

    @ApiProperty({ type: SearchResponseMessageDto })
    message: SearchResponseMessageDto;
}

import { ApiProperty } from "@nestjs/swagger";
import { Domain } from "../../../configs/api.config";

class SearchCriteria {
  @ApiProperty({
    example: 'RomRaider',
    type: String
  })
  searchString?: string;
  // @ApiProperty({
  //   type: String
  // })
  // providerId?: string;
  // @ApiProperty({
  //   type:String
  // })
  // categoryId?: string;
  // @ApiProperty({
  //   type:String
  // })
  // pickupLocation: string;
  // @ApiProperty({
  //   type:String
  // })
  // dropLocation: string;
  // @ApiProperty({
  //   type:String
  // })
  // providerName?: string;
  @ApiProperty({
    example: 'OSS Project',
    type: String
  })
  categoryName?: string;
}
class SearchRequestMessageDto {
  @ApiProperty({
    type: SearchCriteria
  })
  criteria: SearchCriteria
}

class ClientContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'search',
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

export class SearchRequestDto {
  @ApiProperty({
    type: ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type: SearchRequestMessageDto
  })
  message: SearchRequestMessageDto
}

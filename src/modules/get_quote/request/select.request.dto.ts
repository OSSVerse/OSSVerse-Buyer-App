import { ApiProperty } from "@nestjs/swagger";
import { Domain } from "src/configs/api.config";

class SelectProvider {
  @ApiProperty({
    example: 'deb909f2-8369-49fc-b30b-231b2ec4b874',
    type: String
  })
  id: String
}

class SelectLocation {
  @ApiProperty({
    type: String
  })
  gps: String
}
class SelectEnd {
  @ApiProperty({
    type: SelectLocation
  })
  location: SelectLocation
}
class SelectStart {
  @ApiProperty({
    type: SelectLocation
  })
  location: SelectLocation
}

class SelectFulfillment {
  @ApiProperty({
    type: String
  })
  id: String
  @ApiProperty({
    type: SelectStart
  })
  start: SelectStart
  @ApiProperty({
    type: SelectEnd
  })
  end: SelectEnd
}

class SelectItem {
  @ApiProperty({
    example: '1edd54c3-dd53-43e0-b3ad-355d2e8bba70',
    type: String
  })
  id: String
}
class SelectOrder {
  @ApiProperty({
    type: SelectProvider
  })
  provider: SelectProvider
  @ApiProperty({
    type: [SelectItem]
  })
  items: SelectItem[]
  @ApiProperty({
    type: {}
  })
  fulfillment: {}

}

class SelectRequestMessageDto {
  @ApiProperty({
    type: SelectOrder
  })
  order: any
  cart: any
}

class SelectContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'select',
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


export class SelectRequestDto {
  @ApiProperty({
    type: SelectContext
  })
  context: SelectContext
  @ApiProperty({
    type: SelectRequestMessageDto
  })
  message: SelectRequestMessageDto
}

export class ListSelectRequestDto {
  @ApiProperty({
    type: [SelectRequestDto]
  })
  selectRequestDto: SelectRequestDto[]
}


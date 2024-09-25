
import { ApiProperty } from "@nestjs/swagger";
import { Domain } from "src/configs/api.config";
import { locationInfo } from "src/shared/models/client-context.dto";

class StatusRequestMessageDto {
  @ApiProperty({
    type: String
  })
  order_id: String
}


class StatusContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'status',
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
    description:'domain is required'
  })
  bap_id? :string
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

export class StatusRequestDto {
  @ApiProperty({
    type: StatusContext
  })
  context: StatusContext
  @ApiProperty({
    type: StatusRequestMessageDto
  })
  message: StatusRequestMessageDto
  order_object: any
}

export class ListStatusRequestDto {
  @ApiProperty({
    type: [StatusRequestDto]
  })
  statusRequestDto: StatusRequestDto[]
}






import { ApiProperty } from "@nestjs/swagger"
import { Domain } from "../../configs/api.config"

export class ClientContext {
  @ApiProperty({
    type: String
  })
  transaction_id?: string
  @ApiProperty({
    type: String
  })
  bpp_id?: string
  @ApiProperty({
    type: String
  })
  bpp_uri?: string
  @ApiProperty({
    description:'domain is required'
  })
  bap_id? :string
  bap_uri?: string
  domain: Domain
}
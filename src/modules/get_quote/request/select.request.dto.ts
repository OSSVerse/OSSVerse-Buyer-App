import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";


class SelectProvider {
  @ApiProperty({
    type: String
  })
  id: String
  @ApiProperty({
    type: [String]
  })
  locations: Array<string>
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
class SelectCount{
  count:Number
}
class SelectItem{
  id:String
  quantity:SelectCount
}
class SelectOrder {
  @ApiProperty({
    type: SelectProvider
  })
  provider: SelectProvider
  @ApiProperty({
    type: []
  })
  items: SelectItem[]
  @ApiProperty({
    type: SelectFulfillment
  })
  fulfillment: SelectFulfillment

}
class SelectRequestMessageDto {
  @ApiProperty({
    type: SelectOrder
  })
  order: any
  cart:any
}




export class SelectRequestDto {
  @ApiProperty({
    type: ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type: SelectRequestMessageDto
  })
  message: SelectRequestMessageDto
}
export class ListSelectRequestDto{
  selectRequestDto: SelectRequestDto[]
}


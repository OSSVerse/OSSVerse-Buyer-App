
import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";


class StatusRequestMessageDto {
  @ApiProperty({
    type:String
  })
  order_id: String
}
export class StatusRequestDto {
  @ApiProperty({
    type:ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type:StatusRequestMessageDto
  })
  message: StatusRequestMessageDto
  order_object:any
}
export class ListStatusRequestDto{

  statusRequestDto:StatusRequestDto[]

}






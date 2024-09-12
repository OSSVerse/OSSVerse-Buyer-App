
import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";

class CancelRequestMessageDto {
  @ApiProperty({
    type:String
  })
  order_id: String
  @ApiProperty({
    type:String
  })
  cancellation_reason_id:String

}
export class CancelRequestDto {
  @ApiProperty({
    type:ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type:CancelRequestMessageDto
  })
  message: CancelRequestMessageDto
}
export class ListCancelRequestDto{
  @ApiProperty({
    type:[CancelRequestDto]
  })
  cancelRequestDto: CancelRequestDto[]
}







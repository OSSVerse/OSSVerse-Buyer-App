
import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";
class TrackRequestMessageDto {

  @ApiProperty({
    type:String
  })
  order_id: String
}
export class TrackRequestDto {

    @ApiProperty({
      type:ClientContext
    })
  context: ClientContext

  @ApiProperty({
    type:TrackRequestMessageDto
  })
  message:TrackRequestMessageDto
}
export class ListTrackRequestDto{

  @ApiProperty({

    type:[TrackRequestDto]

  })

  trackRequestDto:TrackRequestDto[]

}






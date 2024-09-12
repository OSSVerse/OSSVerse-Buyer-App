import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";

class SupportRequestMessageDto {
  @ApiProperty({
    type:String
  })
  uri:String
  @ApiProperty({
    type:String
  })
  ref_id:String
}
export class SupportRequestDto {
  
    @ApiProperty({
      type:ClientContext
    })
  context: ClientContext
  @ApiProperty({
    type:SupportRequestMessageDto
  })
  message: SupportRequestMessageDto
}

export class ListSupportRequestDto{
  @ApiProperty({
    type:[SupportRequestDto]
  })
  supportRequestDto: SupportRequestDto[]
}




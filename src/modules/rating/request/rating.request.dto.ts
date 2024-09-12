
import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";

class RatingRequestMessageDto {
  @ApiProperty({
    type:String
  })
  id: String
  @ApiProperty({
    type:String
  })
  rating_category:String
  @ApiProperty({
    type:Number
  })
  value:Number
}

export class RatingRequestDto {
  @ApiProperty({
    type: ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type:RatingRequestMessageDto
  })
  message: RatingRequestMessageDto
}

export class ListRatingRequestDto{
  @ApiProperty({
    type: [RatingRequestDto]
  })
  ratingRequestDto: RatingRequestDto[]
}






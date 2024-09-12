import { ApiProperty } from "@nestjs/swagger";

export class OrdersRequestDto {
  @ApiProperty({
    type: String
  })
  userId: string
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './providers/order.service';
import { OrdersRequestDto } from './request/order.request.dto';
import { MainResponseorderDto } from './response/order.response.dto';

@ApiTags('orders')
@Controller("client")
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) { }

  @Get('/v2/orders')
  @ApiResponse({
    status: 200,
    description: 'Successful quote response',
    type: MainResponseorderDto, // Use your response DTO
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async get(@Query() params: OrdersRequestDto): Promise<any> {
    console.log("=====================userID===================", params.userId)
    const orders = await this.orderService.fetchOrders(params.userId)
    return {
      orders
    }
  }
}

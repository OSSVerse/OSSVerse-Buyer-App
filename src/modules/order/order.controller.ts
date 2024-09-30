/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './providers/order.service';
import { OrdersRequestDto } from './request/order.request.dto';

@ApiTags( 'orders')
@Controller("client")
export class OrderController {
    constructor(
        private readonly orderService: OrderService
      ) {}
      
      @Get('/v2/orders')
      async get(@Query() params: OrdersRequestDto): Promise<any> {
        console.log("=====================userID===================",params.userId)
         const orders = await this.orderService.fetchOrders(params.userId)
         return {
          orders
         }
      }
}

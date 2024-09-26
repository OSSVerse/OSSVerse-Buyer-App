/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './providers/order.service';
import { OrdersRequestDto } from './request/order.request.dto';

// @ApiTags( 'order')
@Controller("client")
export class OrderController {
    constructor(
        private readonly orderService: OrderService
      ) {}
      
      @Get('/v2/orders')
      async get(@Query() params: OrdersRequestDto): Promise<any> {
        console.log(params.userId)
         const orders = await this.orderService.fetchOrders(params.userId)
         return {
          orders
         }
      }
}

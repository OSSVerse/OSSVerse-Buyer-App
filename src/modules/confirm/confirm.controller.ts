/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import {ConfimRequestDto, ListConfirmRequestDto } from './request/confirm.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { ConfirmService } from './providers/confirm.service';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../order/models/order.schema';
import { Model } from 'mongoose';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';

@ApiTags( 'confirm')
@Controller("client")
export class ConfirmController {
    constructor(
        private readonly confirmService: ConfirmService,
        @InjectModel(Order.name) private orderModel: Model<Order>,
        private readonly uuidFactory: UuidFactory
      ) {}
      
      @Post('/v2/confirm')
      async get(@Body() listConfirmDto: ListConfirmRequestDto): Promise<any> {
        const requests = listConfirmDto.confirmRequestDto.map(confirmDto => {
         return this.confirmService.confirm(confirmDto);
        })
         const response = await Promise.all(requests)
         await this.storeOrder(response, listConfirmDto.userId)

         return response
      }

      async storeOrder(order: any, userId: string) {
        const createdCat = new this.orderModel({
          userId: userId,
          parentOrderId: this.uuidFactory.create(),
          orders: order
        });
        return createdCat.save();
      }
}

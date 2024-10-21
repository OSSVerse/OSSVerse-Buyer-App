/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListConfirmRequestDto } from './request/confirm.request.dto';
import { ConfirmService } from './providers/confirm.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../order/models/order.schema';
import { Model } from 'mongoose';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';
import { ConfirmResponseDto } from './response/confirm.response.dto';

@ApiTags('confirm')
@Controller("client")
export class ConfirmController {
  constructor(
    private readonly confirmService: ConfirmService,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly uuidFactory: UuidFactory
  ) { }

  @Post('/v2/confirm')
  @ApiResponse({
    status: 201,
    description: 'Successful search response',
    type: ConfirmResponseDto, // Define this DTO based on the response structure
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async get(@Body() listConfirmDto: ListConfirmRequestDto): Promise<any> {
    const requests = listConfirmDto.confirmRequestDto.map(confirmDto => {
      return this.confirmService.confirm(confirmDto);
    })
    // const response = await Promise.all(requests)
    // await this.storeOrder(response, listConfirmDto.userId)

    let response;
    try {
      response = await Promise.all(requests);
      await this.storeOrder(response, listConfirmDto.userId);
    } catch (error) {
      console.error('Error occurred:', error);
    }

    return response
  }

  async storeOrder(order: any, userId: string) {
    // console.log("=============Order==============", JSON.stringify(order));
    console.log(userId);
    const createdCat = new this.orderModel({

      userId: userId,
      parentOrderId: this.uuidFactory.create(),
      orders: order
    });
    console.log("======order in db======", createdCat);
    return createdCat.save();
  }
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListInitRequestDto } from './request/init.request.dto';
import { InitService } from './providers/init.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { InitCatalogResponse } from './response/init.response';

@ApiTags('init')
@Controller("client")
export class InitController {
  constructor(
    private readonly initService: InitService
  ) {

  }

  @Post('/v2/initialize_order')
  @Post('/v2/initialize_order')
      @ApiResponse({
        status: 201,
        description: 'Successful quote response',
        type: InitCatalogResponse, // Use your response DTO
        isArray: true
      })
      @ApiResponse({
        status: 400,
        description: 'Bad request',
      })
      @ApiResponse({
        status: 500,
        description: 'Internal server error',
      })
  async get(@Body() initDto: ListInitRequestDto): Promise<any> {

    const requests = initDto.initRequestDto.map(initDto => {
      return this.initService.init(initDto);
    })
    return await Promise.all(requests)
    // return await this.initService.init(initDto);
  }
}

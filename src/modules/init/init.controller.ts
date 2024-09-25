/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListInitRequestDto } from './request/init.request.dto';
import { InitService } from './providers/init.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('init')
@Controller("client")
export class InitController {
  constructor(
    private readonly initService: InitService
  ) {

  }

  @Post('/v2/initialize_order')
  async get(@Body() initDto: ListInitRequestDto): Promise<any> {

    const requests = initDto.initRequestDto.map(initDto => {
      return this.initService.init(initDto);
    })
    return await Promise.all(requests)
    // return await this.initService.init(initDto);
  }
}

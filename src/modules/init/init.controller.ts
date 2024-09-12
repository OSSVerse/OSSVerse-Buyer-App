/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import {InitRequestDto, ListInitRequestDto } from './request/init.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { InitService } from './providers/init.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('initialize_order')
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

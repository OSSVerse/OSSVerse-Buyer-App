/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListStatusRequestDto, StatusRequestDto } from './request/status.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { StatusService } from './providers/status.service'
import { ApiTags } from '@nestjs/swagger';


@ApiTags('status')
@Controller('client')
export class StatusController {

    constructor(
        private readonly statusService: StatusService
      ) {
    
      }
      
      @Post('/v2/status')

      async status(@Body() statusDto: ListStatusRequestDto): Promise<any> {

        const requests = statusDto.statusRequestDto.map(statusDto => {

          return this.statusService.status(statusDto);

        })

         return await Promise.all(requests)

      }
}

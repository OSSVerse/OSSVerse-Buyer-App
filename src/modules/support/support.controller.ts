/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListSupportRequestDto, SupportRequestDto } from './request/support.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { SupportService } from './providers/support.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('support')
@Controller('client')
export class SupportController {
    constructor(
        private readonly supportService: SupportService
      ) {
    
      }
      
      @Post('/v2/support')
      async support(@Body() supportDto: ListSupportRequestDto): Promise<any> {
        const requests = supportDto.supportRequestDto.map((supportDto) => {
          return this.supportService.support(supportDto);
        });
        return await Promise.all(requests);
      }
}

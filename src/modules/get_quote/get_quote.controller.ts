/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListSelectRequestDto } from './request/select.request.dto';
import { GetQuoteService } from './providers/get_quote.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('select')
@Controller('client')
export class GetQuoteController {
    constructor(
        private readonly getQuoteService: GetQuoteService
      ) {}
      
      @Post('/v2/get_quote')
      async get(@Body() selectDto: ListSelectRequestDto): Promise<any> {
        const requests = selectDto.selectRequestDto.map(selectDto => {
          return this.getQuoteService.get(selectDto);
        })
         return await Promise.all(requests)
      }
}

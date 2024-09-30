/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListSelectRequestDto } from './request/select.request.dto';
import { GetQuoteService } from './providers/get_quote.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetQuoteResponseDto } from './response/select.response.dto';

@ApiTags('select')
@Controller('client')
export class GetQuoteController {
    constructor(
        private readonly getQuoteService: GetQuoteService
      ) {}
      
      @Post('/v2/get_quote')
      @ApiResponse({
        status: 201,
        description: 'Successful quote response',
        type: GetQuoteResponseDto, // Use your response DTO
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
      async get(@Body() selectDto: ListSelectRequestDto): Promise<any> {
        const requests = selectDto.selectRequestDto.map(selectDto => {
          return this.getQuoteService.get(selectDto);
        })
         return await Promise.all(requests)
      }
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListRatingRequestDto, RatingRequestDto } from './request/rating.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { RatingService } from './providers/rating.service'
import { ApiTags } from '@nestjs/swagger';
@ApiTags('rating')
@Controller('client')
export class RatingController {

    constructor(
        private readonly ratingService: RatingService
      ) {
    
      }
      
      @Post('/v2/rating')
      async status(@Body() ratingDto: ListRatingRequestDto): Promise<any> {
        const requests = ratingDto.ratingRequestDto.map((ratingDto) => {
          return this.ratingService.rating(ratingDto);
        });
        return await Promise.all(requests);
      }
}

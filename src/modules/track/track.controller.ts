/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListTrackRequestDto, TrackRequestDto } from './request/track.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { TrackService } from './providers/track.service'
import { ApiTags } from '@nestjs/swagger';
@ApiTags('track')
@Controller('client')
export class TrackController {

    constructor(
        private readonly trackService: TrackService
      ) {
    
      }
      
      @Post('/v2/track')

      async track(@Body() trackDto: ListTrackRequestDto): Promise<any> {

        const requests = trackDto.trackRequestDto.map(trackDto => {

          return this.trackService.track(trackDto);

        })

         return await Promise.all(requests)

      }
}

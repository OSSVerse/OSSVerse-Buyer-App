/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ListStatusRequestDto } from './request/status.request.dto';
import { StatusService } from './providers/status.service'
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MainResponseStatusDto } from './response/status.response.dto';


@ApiTags('status')
@Controller('client')
export class StatusController {

  constructor(
    private readonly statusService: StatusService
  ) { }

  @Post('/v2/status')
  @ApiResponse({
    status: 201,
    description: 'Successful quote response',
    type: MainResponseStatusDto, // Use your response DTO
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
  async status(@Body() statusDto: ListStatusRequestDto): Promise<any> {

    const requests = statusDto.statusRequestDto.map(statusDto => {

      return this.statusService.status(statusDto);

    })

    return await Promise.all(requests)

  }
}

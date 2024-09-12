/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from "@nestjs/common";
import {
  CancelRequestDto,
  ListCancelRequestDto,
} from "./request/cancel.request.dto";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { CancelService } from "./providers/cancel.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("cancel")
@Controller("client")
export class CancelController {
  constructor(private readonly cancelService: CancelService) {}

  @Post("/v2/cancel")
  async status(@Body() cancelDto: ListCancelRequestDto): Promise<any> {
    const requests = cancelDto.cancelRequestDto.map((cancelDto) => {
      return this.cancelService.cancel(cancelDto);
    });
    return await Promise.all(requests);
  }
}

import { Injectable, Logger } from "@nestjs/common";
import { RatingMapper } from "../mapper/rating.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { RatingRequestDto } from "../request/rating.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class RatingService {
  constructor(
    private readonly mapper: RatingMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async rating(requestPayload: RatingRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.RATING,requestPayload.context.domain)
      context.bpp_id=requestPayload.context.bpp_id
      context.bpp_uri=requestPayload.context.bpp_uri
      context.transaction_id=requestPayload.context.transaction_id
      const payload = {
       context: context,
       message:{
       id:requestPayload.message.id,
       rating_category:requestPayload.message.rating_category,
       value:requestPayload.message.value

       }
      }
      this.logger.log("calling rating api : payload",payload);
      console.log("Input:::",requestPayload)
      const result = await this.protocolServerService.executeAction(becknUrl.rating, payload)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing status call",error)
      throw error
    }
  }
}
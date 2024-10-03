import { Injectable, Logger } from "@nestjs/common";
import { CancelMapper } from "../mapper/cancel.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { CancelRequestDto } from "../request/cancel.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class CancelService {
  constructor(
    private readonly mapper: CancelMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async cancel(requestPayload: CancelRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.CANCEL,requestPayload.context.domain)
      context.bpp_id=requestPayload.context.bpp_id
      context.bpp_uri=requestPayload.context.bpp_uri
      context.transaction_id=requestPayload.context.transaction_id
      const payload = {
        context: context,
       message:{
       order_id:requestPayload.message.order_id,
       cancellation_reason_id:requestPayload.message.cancellation_reason_id
       

       }
      }
      this.logger.log("calling cancel api : payload",payload);
      console.log("Input:::",requestPayload)
      const result = await this.protocolServerService.executeAction(becknUrl.cancel, payload)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing cancel call",error)
      throw error
    }
  }
}
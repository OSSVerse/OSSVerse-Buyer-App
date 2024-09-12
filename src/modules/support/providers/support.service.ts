import { Injectable, Logger } from "@nestjs/common";
import { SupportMapper } from "../mapper/support.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SupportRequestDto } from "../request/support.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class SupportService {
  constructor(
    private readonly mapper: SupportMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async support(requestPayload: SupportRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.SUPPORT,requestPayload.context.domain)
      context.bpp_id=requestPayload.context.bpp_id
      context.bpp_uri=requestPayload.context.bpp_uri
      context.transaction_id=requestPayload.context.transaction_id
      const payload = {
        context: context,
       message:{
       ref_id:requestPayload.message.ref_id
       }
      }
      this.logger.log("calling support api : payload",payload)
      const result = await this.protocolServerService.executeAction(becknUrl.support, payload)
      console.log("op",result)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing support call",error)
      throw error
    }
  }
}
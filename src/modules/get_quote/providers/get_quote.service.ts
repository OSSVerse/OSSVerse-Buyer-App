import { Injectable, Logger } from "@nestjs/common";
import { GetQuoteMapper } from "../mapper/get_quote.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SelectRequestDto } from "../request/select.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { Domain } from "../../../configs/api.config";

@Injectable()
export class GetQuoteService {
  constructor(
    private readonly mapper: GetQuoteMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger: Logger
  ) {}

  async get(requestPayload: SelectRequestDto): Promise<any> {
    try {
      let context;
      let payload;
      context = this.contextFactory.create(
        ProtocolContextAction.SELECT,
        requestPayload.context.domain
      );
      context.bpp_id = requestPayload.context.bpp_id;
      context.bpp_uri = requestPayload.context.bpp_uri;
      context.transaction_id = requestPayload.context.transaction_id;
      // context.bap_id=requestPayload.context.bap_id,
      // context.bap_uri=requestPayload.context.bap_uri
      
      if (
        requestPayload.context.domain === Domain.retail ||
        requestPayload.context.domain === Domain.tourism
      ) {
        let items: any = [];
        
        requestPayload.message.order.items.map((item) => {
          items.push({
            id: item.id,
            quantity: item.quantity,
          });
       
        });
        payload = {
          context: context,
          message: {
            order: {
              provider: {
                id:requestPayload.message.order.provider.id,
                locations:requestPayload.message.order.locations
              },
              
              items: items,
            },
          },
        };
      } else {
        if (requestPayload.context.domain === Domain.mobility) {
          payload = {
            context: context,
            message: requestPayload.message,
          };
        }
      }

      this.logger.log("calling get quote api : payload", payload);

      console.log("Input payload", requestPayload);
      const result = await this.protocolServerService.executeAction(
        becknUrl.select,
        payload
      );
      console.log(result);
      console.log(result.responses[0]?.error);
      const mappedResult = this.mapper.map(result);
      return mappedResult;
    } catch (error) {
      this.logger.error("error executing get_quote", error);
      throw error;
    }
  }
}

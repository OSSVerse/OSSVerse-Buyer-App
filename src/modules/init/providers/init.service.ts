import { Injectable } from "@nestjs/common";
import { InitMapper } from "../mapper/init.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { InitRequestDto } from "../request/init.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { Domain } from "../../../configs/api.config";

@Injectable()
export class InitService {
  constructor(
    private readonly mapper: InitMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory
  ) {}

  async init(requestPayload: InitRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(
        ProtocolContextAction.INIT,
        requestPayload.context.domain
      );

      context.bpp_id = requestPayload.context.bpp_id;
      context.bpp_uri = requestPayload.context.bpp_uri;
      context.transaction_id = requestPayload.context.transaction_id;

      console.log(requestPayload);
      let payload;
      if (
        requestPayload.context.domain === Domain.retail ||
        requestPayload.context.domain === Domain.tourism ||
        requestPayload.context.domain === Domain.software_assurance
      ) {
        let items: any = [];
        requestPayload.message.order.items.map((item) => {
          items.push({
            id: item.id,
            // quantity: item.quantity,
          });
        });
        payload = {
          context: context,
          message: {
            order: {
              provider: {
                id: requestPayload.message.order.provider.id,
                // locations: requestPayload.message.order.provider.locations,
              },
              items: items,
              addOns: [],
              offers: [],
              billing: requestPayload.message.order.billing,
              fulfillment: requestPayload.message.order.fulfillment,
            },
          },
        };
      } else {
        payload = {
          context: context,
          message: {
            order: {
              provider: requestPayload.message.order.provider,
              fulfillment: requestPayload.message.order.fulfillment,
              items: requestPayload.message.order.items,
              billing: requestPayload.message.order.billing,
            },
          },
        };
      }

      console.log("beck::", payload);
      const result = await this.protocolServerService.executeAction(
        becknUrl.init,
        payload
      );
      const mappedResult = this.mapper.map(result);
      return mappedResult;
    } catch (error) {
      throw error;
    }
  }
}

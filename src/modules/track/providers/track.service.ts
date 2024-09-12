import { Injectable, Logger } from "@nestjs/common";
import { TrackMapper } from "../mapper/track.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { TrackRequestDto } from "../request/track.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class TrackService {
  constructor(
    private readonly mapper: TrackMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger: Logger
  ) {}

  async track(requestPayload: TrackRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(
        ProtocolContextAction.TRACK,
        requestPayload.context.domain
      );
      context.bpp_id = requestPayload.context.bpp_id;
      context.bpp_uri = requestPayload.context.bpp_uri;
      context.transaction_id = requestPayload.context.transaction_id;
      const payload = {
        context: context,
        message: {
          order_id: requestPayload.message.order_id,
        },
      };
      console.log("Input:::", requestPayload);
      this.logger.log("calling track api : payload", payload);

      const result = await this.protocolServerService.executeAction(
        becknUrl.track,
        payload
      );

      const mappedResult = this.mapper.map(result);
      return mappedResult;
    } catch (error) {
      this.logger.error("error executing track call", error);
      throw error;
    }
  }
}

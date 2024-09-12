import { Injectable, Logger } from "@nestjs/common";
import { ConfirmMapper } from "../mapper/confirm.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import {
  ConfimRequestDto,
  SelectPayment
} from "../request/confirm.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { Domain } from "../../../configs/api.config";
import { IsEnum, validateSync } from "class-validator";
import { plainToClass } from "class-transformer";
import { OrderId } from "src/shared/models/order-id.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UuidFactory } from "src/shared/factories/uuid.factory.provider";

@Injectable()
export class ConfirmService {
  constructor(
    private readonly mapper: ConfirmMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private readonly uuidFactory: UuidFactory,
    private logger: Logger,
    @InjectModel(OrderId.name) private orderIdModel: Model<OrderId>
  ) {}

  async confirm(requestPayload: ConfimRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(
        ProtocolContextAction.CONFIRM,
        requestPayload.context.domain
      );
      context.bpp_id = requestPayload.context.bpp_id;
      context.bpp_uri = requestPayload.context.bpp_uri;
      context.transaction_id = requestPayload.context.transaction_id;

      let paylaod;
      if (
        requestPayload.context.domain === Domain.retail ||
        requestPayload.context.domain === Domain.tourism
      ) {
        const payment = plainToClass(
          SelectPayment,
          requestPayload.message.order.payment
        );
        // const validationErrors = validateSync(payment);
        // if (validationErrors.length > 0) {
        //   throw validationErrors;
        // }

        let items: any = [];
        requestPayload.message.order.items.map((item) => {
          items.push({
            id: item.id,
            extended_attributes: {},
            quantity: item.quantity,
            price: item.price,
            descriptor: item.descriptor,
            tags: item.tags
          });
        });
        paylaod = {
          context: context,
          message: {
            order: {
              provider: {
                id: requestPayload.message.order.provider.id,
                locations: requestPayload?.message?.order?.provider?.locations
              },
              items: items,
              addOns: [],
              offers: [],
              billing: requestPayload.message.order.billing,
              fulfillment: requestPayload.message.order.fulfillment,
              payment: requestPayload.message.order.payment
            }
          }
        };
      } else {
        paylaod = {
          context: context,
          message: {
            order: {
              id: requestPayload.message.order.id,
              provider: requestPayload.message.order.provider,
              items: requestPayload.message.order.items,
              quote: requestPayload.message.order.quote,
              fulfillment: requestPayload.message.order.fulfillment
            }
          }
        };
      }

      console.log("Input::", requestPayload);
      this.logger.log(
        "calling confirm endpoint of protocol server: requestpayload",
        requestPayload
      );
      const result = await this.protocolServerService.executeAction(
        becknUrl.confirm,
        paylaod
      );
      console.log(result);

      const orderResponse = await Promise.all(
        result.responses.map(async (value) => {
          const id = value.message.order.id;

          const order = await this.orderIdModel
            .findOne({
              actualOrderId: id
            })
            .exec();

          if (order) {
            return {
              ...value,
              message: {
                ...value.message,
                order: {
                  ...value.message.order,
                  displayId: order.displayOrderId
                }
              }
            };
          }
          function generateNumericID() {
            const characters = "0123456789";
            let id = "";

            for (let i = 0; i < 6; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              id += characters[randomIndex];
            }

            return id;
          }
          const displayId = generateNumericID();
          const displyOrder = new this.orderIdModel({
            actualOrderId: id,
            displayOrderId: displayId,
            domain: requestPayload.context.domain
          });
          await displyOrder.save();

          return {
            ...value,
            message: {
              ...value.message,
              order: {
                ...value.message.order,
                displayId: displayId
              }
            }
          };
        })
      );

      console.log(orderResponse);
      const mappedResult = this.mapper.map({
        ...result,
        responses: orderResponse
      });
      return mappedResult;
    } catch (error) {
      this.logger.error("error executing confirm endpoint", error);
      throw error;
    }
  }
}

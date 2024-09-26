import { Injectable, Logger } from "@nestjs/common";
import { Order } from "src/modules/order/models/order.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { becknUrl } from "src/configs/api.config";

@Injectable()
export class OrderService {
  constructor(
    private logger: Logger,
    private readonly protocolServerService: ProtocolServerService,
    @InjectModel(Order.name) private orderModel: Model<Order>
  ) {}

  async fetchOrders(userId: string): Promise<any> {
    try {
      const result = await this.orderModel
        .find({
          userId: userId,
        })
        .exec();


      console.log("RESULT ALL ORDER::::", JSON.stringify(result));

      const filteredData = result.filter((item) =>
        item.orders.every(
          (order) =>
            order.message.responses.length > 0 &&
            !order.message.responses.some((response) => "error" in response)
        )
      );

      console.log("Filtered Result from DB", filteredData);


      await Promise.all(
        // Parent Order loop
        filteredData.map((userOrder) => {
          return Promise.all(
            // Order Items
            userOrder.orders.map((eachOrderItem) => {
              if (
                eachOrderItem?.message?.responses === undefined ||
                eachOrderItem?.message?.responses.length === 0
              ) {
                return {
                  context: eachOrderItem?.context,
                  message: {
                    context: eachOrderItem?.message?.context,
                    responses: eachOrderItem?.message?.responses,
                  },
                };
              }
              const payload = {
                context: {
                  ...eachOrderItem?.message?.context,
                  action: "status",
                },
                message: {
                  order_id:
                    eachOrderItem?.message?.responses[0]?.message?.order.id,
                },
              };
              return this.protocolServerService
                .executeAction(becknUrl.status, payload)
                .then((orderStatus) => {
                  return {
                    context: eachOrderItem?.context,
                    message: {
                      context: eachOrderItem?.message?.context,
                      responses: orderStatus?.responses,
                    },
                  };
                });
            })
          ).then((reponseOrder) => {
            return this.orderModel
              .updateOne(
                {
                  parentOrderId: userOrder?.parentOrderId,
                },
                {
                  orders: reponseOrder,
                }
              )
              .exec();
          });
        })
      );

      const updatedResult = await this.orderModel
        .find({
          userId: userId,
        })
        .exec();

      return updatedResult;
    } catch (error) {
      this.logger.error("error fetching orders", error);
      throw error;
    }
  }
}

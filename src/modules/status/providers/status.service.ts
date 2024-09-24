import { Injectable, Logger } from "@nestjs/common";
import { StatusMapper } from "../mapper/status.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { StatusRequestDto } from "../request/status.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import{FileUploadService} from "src/shared/providers/file-upload.provider"
import { OrderId } from "src/shared/models/order-id.schema";
import { InjectModel } from "@nestjs/mongoose";
import { UuidFactory } from "src/shared/factories/uuid.factory.provider";
import { Model } from "mongoose";



@Injectable()
export class StatusService {
  constructor(
    private readonly mapper: StatusMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private readonly fileuploadService: FileUploadService,
    private logger : Logger,
    private readonly uuidFactory: UuidFactory,
    @InjectModel(OrderId.name) private orderIdModel: Model<OrderId>
  ){}

  async status(requestPayload: StatusRequestDto): Promise<any> {
    try {

      
      const context = this.contextFactory.create(ProtocolContextAction.STATUS,requestPayload.context.domain)
      context.bpp_id=requestPayload.context.bpp_id
      context.bpp_uri=requestPayload.context.bpp_uri
      context.transaction_id=requestPayload.context.transaction_id
      const payload = {
        context: context,
       message:{
       order_id:requestPayload.message.order_id
       }
      }
      this.logger.log("calling status api : payload",payload);
      console.log("Input:::",requestPayload)
     
      const result = await this.protocolServerService.executeAction(becknUrl.status, payload)
     
      console.log("====================result===================", JSON.stringify(result));
      

      

      if((requestPayload.context.domain.trim().toLowerCase()==='tourism')&&requestPayload.order_object){
        const qr_code = await this.fileuploadService.fileUpload(requestPayload.order_object)
        result.responses[0].qr_url=qr_code
    
      }
      const statusResponse = await Promise.all(
        result.responses.map(async (value) => {
          console.log("====================value============", JSON.stringify(value))
          const id = value.message.order.id;
          const fetchOrder=await this.fetchOrderId(id)
          
          console.log("====================================fetchOrder=============", fetchOrder);
          

          return {
            ...value,
            message: {
              ...value.message,
              order: {
                ...value.message.order,
                displayId: value?.message?.order?.id,
              },
            },
          };
        })
      );
      console.log("res",result)
      console.log("status",statusResponse)

      console.log("status_qr",statusResponse)
    
      const mappedResult = this.mapper.map({
        ...result,
        responses: statusResponse,
      });
      return mappedResult
    } catch (error) {
      this.logger.error("error executing status call",error)
      throw error
    }
  }
  async fetchOrderId(orderId: string): Promise<any> {
    try {
   
      return this.orderIdModel.find({
        actualOrderId:orderId 
      }).exec();
    } catch (error) {
      this.logger.error(`Error fetching orders with orderId: ${orderId}`, error);
      throw new Error(`Failed to fetch order with id: ${orderId}`);
    }
  }
}
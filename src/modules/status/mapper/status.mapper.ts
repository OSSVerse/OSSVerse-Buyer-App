import { Injectable } from "@nestjs/common";

@Injectable()
export class StatusMapper {
  map(data: any): any {
    console.log("========================data===============", JSON.stringify(data))
    return {
      context: data.context,
      message:data.responses[0]?.message ? data.responses[0]?.message : "empty message",
      // message: data.message,
      qr_url: data.responses[0]?.qr_url ? data.responses[0]?.qr_url : ""
      
    }
  }
}
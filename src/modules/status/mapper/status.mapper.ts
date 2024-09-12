import { Injectable } from "@nestjs/common";

@Injectable()
export class StatusMapper {
  map(data: any): any {
    return {
      context: data.context,
      message:data.responses[0].message,
      qr_url:data.responses[0].qr_url
      
    }
  }
}
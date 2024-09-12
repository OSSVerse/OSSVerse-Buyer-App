import { Injectable } from "@nestjs/common";

@Injectable()
export class SupportMapper {
  map(data: any): any {
    return {
      context: data.context,
      message:data.responses[0].message
    }
  }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetQuoteMapper {
  map(data: any): any {
    return {
      context: data.context,
      message: {
        catalogs: data?.responses[0]?.message
      }
    }
  }
}
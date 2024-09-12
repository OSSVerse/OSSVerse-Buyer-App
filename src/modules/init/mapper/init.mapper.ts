import { Injectable } from "@nestjs/common";

@Injectable()
export class InitMapper {
  map(data: any): any {
    return {
      context: data.context,
      message: {
        catalogs: data
      }
    }
  }
}
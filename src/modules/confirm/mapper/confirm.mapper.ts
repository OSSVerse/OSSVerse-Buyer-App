import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfirmMapper {
  map(data: any): any {
    return {
      context: data.context,
      message: data
    }
  }
}
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProtocolServerService {
  constructor(private readonly httpService: HttpService) { }

  async executeAction(url: string, payload: any): Promise<any> {
    try {
      //console.log(process.env.PROTOCOL_SERVER_URL);
      const finalUrl = `${process.env.PROTOCOL_SERVER_URL}/${url}`
      console.log("EP::", url)
      console.log("URLL", finalUrl)
      console.log(" Clientpayload:::", payload)
      const result = await this.httpService.post(finalUrl, payload).toPromise()
      return result.data
    } catch (error) {
      throw error
    }
  }
}
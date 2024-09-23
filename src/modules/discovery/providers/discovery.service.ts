import { Injectable, Logger } from "@nestjs/common";
import { DiscoveryMapper } from "../mapper/discovery.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SearchRequestDto } from "../request/search.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
// import { FirebaseAuthenticationService } from "src/shared/providers/firebase.provider";
import { Domain } from "../../../configs/api.config";

@Injectable()
export class DiscoveryService {
  constructor(
    private readonly mapper: DiscoveryMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger: Logger
  ) { }

  async search(requestPayload: SearchRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.SEARCH,requestPayload.context.domain)
      let additionalPayload
      let fullfillment = {
        start: {
          location: requestPayload.message.criteria?.pickupLocation ? {
            gps: requestPayload.message.criteria?.pickupLocation
          } : {}

        },
        end: {
          location: requestPayload.message.criteria?.dropLocation ? {
            gps: requestPayload.message.criteria?.dropLocation
          } : {}
        }

      }
      if (requestPayload.context.domain===Domain.retail || requestPayload.context.domain===Domain.tourism) {

        additionalPayload = {
          fulfillment: fullfillment,
          item: {
            descriptor: {
              name: requestPayload.message.criteria.searchString
            }
          },
          provider: {
            descriptor: {},
            id: requestPayload.message.criteria?.providerId
          },
          category: {
            descriptor: {
              name: requestPayload.message.criteria.categoryName ? requestPayload.message.criteria.categoryName : "tourism"
            }
          }
        }
      }
      let payload;
      if (requestPayload.context.domain===Domain.retail || requestPayload.context.domain===Domain.tourism) {
        payload = {
          context: context,
          message: {
            intent: additionalPayload
          }
        }
      } else {

        payload = {
          context: context,
          message: {
            intent: {
              item: {
                descriptor: {
                  name: requestPayload.message.criteria.searchString ? requestPayload.message.criteria.searchString : ""
                }
              },
              category: {
                descriptor: {
                  name: requestPayload.message.criteria.categoryName ? requestPayload.message.criteria.categoryName : ""
                }
              }
            }
          }

        }
      }
      this.logger.log("calling search endpoint of protocol server: requestpayload", requestPayload)
      this.logger.log(JSON.stringify(payload))
      const result = await this.protocolServerService.executeAction(becknUrl.search, payload)
      console.log(result)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    }
    catch (error) {
      this.logger.error("error executing searching point", error)
      throw error
    }
  }
}
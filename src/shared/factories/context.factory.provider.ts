import { Injectable } from "@nestjs/common";
import { UuidFactory } from "./uuid.factory.provider";
import {
  ProtocolContext,
  ProtocolContextAction
} from "../models/protocol-context.dto";
import { becknConfig } from "src/configs/api.config";
import { EnumType } from "typescript";
import { Domain } from "../../configs/api.config";

@Injectable()
export class ContextFactory {
  constructor(private readonly uuidFactory: UuidFactory) {}

  create(
    action: ProtocolContextAction = ProtocolContextAction.SEARCH,
    domain: Domain,
    transactionId: string = this.uuidFactory.create(),
    messageId: string = this.uuidFactory.create(),
    bpp_id?: string,
    bpp_uri?: string
  ): ProtocolContext {
    const date = new Date();
    let becknDomain;
    switch (domain) {
      case Domain.mobility:
        becknDomain = "nic2004:60221";
        break;
      case Domain.retail:
        becknDomain = "nic2004:52110";
        break;

      case Domain.tourism:
        becknDomain = "nic2004:52110";
        break;
      case Domain.retail_amsterdam:
        becknDomain = Domain.retail_amsterdam;
    }
    return {
      domain: becknDomain,
      country: becknConfig.country,
      city: becknConfig.city,
      action: action,
      core_version: becknConfig.core_version,
      bap_id: process.env.BAP_ID,
      bap_uri: process.env.BAP_URI,
      bpp_id: bpp_id,
      bpp_uri: bpp_uri,
      transaction_id: transactionId,
      message_id: messageId,
      timestamp: date.toDateString()
    };
  }
}

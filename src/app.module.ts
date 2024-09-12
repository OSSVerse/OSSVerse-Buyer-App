import { CancelModule } from "./modules/cancel/cancel.module"
import { RatingModule } from "./modules/rating/rating.module";
import { InitModule } from "./modules/init/init.module";
import { SupportModule } from "./modules/support/support.module";
import { TrackModule } from "./modules/track/track.module";
import { StatusModule } from "./modules/status/status.module";
import { GetQuoteModule } from "./modules/get_quote/get_quote.module";
import { Module } from "@nestjs/common";
import { AccountsModule } from "./modules/accounts/accounts.module";
import { DiscoveryModule } from "./modules/discovery/discovery.module";
import { ConfirmModule } from "./modules/confirm/confirm.module";
import { HttpModule } from "@nestjs/axios";
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from "./modules/order/order.module";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });
@Module({

  imports: [
    CancelModule,
    RatingModule,
    InitModule,
    SupportModule,
    TrackModule,
    StatusModule,
    GetQuoteModule,
    AccountsModule,
    DiscoveryModule,
    ConfirmModule,
    HttpModule,
    OrderModule,
    // MongooseModule.forRoot('mongodb://root:beckn@123@localhost:27017/beckn?authSource=admin&directConnection=true')
    // MongooseModule.forRoot("mongodb://root:example@127.0.0.1:27017/mongoose_journey?authSource=admin")

    MongooseModule.forRoot('mongodb://admin:password@mongodb:27017/test?authSource=admin')

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

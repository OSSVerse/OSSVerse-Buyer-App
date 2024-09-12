/*
https://docs.nestjs.com/modules
*/

import { Module,Logger } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './providers/status.service';
import { StatusMapper } from './mapper/status.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';
import{FileUploadService} from "src/shared/providers/file-upload.provider";
import { OrderId,OrderIdSchema } from "src/shared/models/order-id.schema"
import { Order, OrderSchema} from '../order/models/order.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
 imports: [HttpModule, MongooseModule.forFeature([{ name: OrderId.name, schema: OrderIdSchema }])],
    controllers: [StatusController],
    providers: [StatusService, FileUploadService,StatusMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger],
})
export class StatusModule {}

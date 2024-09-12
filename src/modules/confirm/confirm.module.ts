import { Module ,Logger} from '@nestjs/common';
import { ConfirmController } from './confirm.controller';
import { ConfirmService } from './providers/confirm.service';
import { ConfirmMapper } from './mapper/confirm.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';
import { OrderId,OrderIdSchema } from "src/shared/models/order-id.schema"
import { Order, OrderSchema} from '../order/models/order.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule,MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]), MongooseModule.forFeature([{ name: OrderId.name, schema: OrderIdSchema }])],
  controllers: [ConfirmController],
  providers: [ConfirmService, ConfirmMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger]
})
export class ConfirmModule {}

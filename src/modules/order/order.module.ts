import { Module ,Logger} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Order, OrderSchema } from '../order/models/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './providers/order.service';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrderController],
  providers: [OrderService,Logger,ProtocolServerService,ContextFactory,UuidFactory]
})
export class OrderModule {}

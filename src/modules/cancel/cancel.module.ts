/*
https://docs.nestjs.com/modules
*/

import { Module,Logger } from '@nestjs/common';
import { CancelController } from './cancel.controller';
import { CancelService } from './providers/cancel.service';
import { CancelMapper } from './mapper/cancel.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [CancelController],
    providers: [CancelService, CancelMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger],
})
export class CancelModule {}

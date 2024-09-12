/*
https://docs.nestjs.com/modules
*/

import { Module,Logger } from '@nestjs/common';
import { InitController } from './init.controller';
import { InitService } from './providers/init.service';
import { InitMapper } from './mapper/init.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [InitController],
    providers: [InitService, InitMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger],
})
export class InitModule {}

/*
https://docs.nestjs.com/modules
*/

import { Module,Logger } from '@nestjs/common';
import { GetQuoteController } from './get_quote.controller';
import { GetQuoteService } from './providers/get_quote.service';
import { GetQuoteMapper } from './mapper/get_quote.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [GetQuoteController],
    providers: [GetQuoteService, GetQuoteMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger],
})
export class GetQuoteModule {}

/*
https://docs.nestjs.com/modules
*/

import { Module,Logger } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './providers/rating.service';
import { RatingMapper } from './mapper/rating.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [RatingController],
    providers: [RatingService, RatingMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger],
})
export class RatingModule {}

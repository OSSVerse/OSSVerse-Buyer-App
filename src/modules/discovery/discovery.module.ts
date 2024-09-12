import { Module ,Logger} from '@nestjs/common';
import { DiscoveryController } from './discovery.controller';
import { DiscoveryService } from './providers/discovery.service';
import { DiscoveryMapper } from './mapper/discovery.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';

@Module({
  imports: [HttpModule],
  controllers: [DiscoveryController],
  providers: [DiscoveryService, DiscoveryMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger]
})
export class DiscoveryModule {}

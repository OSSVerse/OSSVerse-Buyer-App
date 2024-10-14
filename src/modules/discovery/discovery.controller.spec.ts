import { Test, TestingModule } from '@nestjs/testing';
import { DiscoveryController } from './discovery.controller';

import { DiscoveryService } from "./providers/discovery.service";

describe('DiscoveryController', () => {
  let controller: DiscoveryController;
  let discoveryService: DiscoveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscoveryController],
      providers: [
        {
          provide: DiscoveryService,
          useValue: {
            // Mock the actual method(s) used by the controller
            getDiscoveryData: jest.fn().mockResolvedValue({ data: 'mocked response' }),
          },
        },
      ],
    }).compile();

    controller = module.get<DiscoveryController>(DiscoveryController);
    discoveryService = module.get<DiscoveryService>(DiscoveryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

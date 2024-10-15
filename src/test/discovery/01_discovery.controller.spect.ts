// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });

jest.setTimeout(300000); // Set timeout to 10 seconds for all tests

import { Test, TestingModule } from '@nestjs/testing';
import { DiscoveryController } from '../../modules/discovery/discovery.controller';
import { DiscoveryService } from "../../modules/discovery/providers/discovery.service";
import { DiscoveryMapper } from "../../modules/discovery/mapper/discovery.mapper"; // Adjust the import path as necessary
import { ProtocolServerService } from "../../shared/providers/protocol-server.provider";
import { HttpModule } from '@nestjs/axios'; // Import the HttpModule
import { ContextFactory } from '../../shared/factories/context.factory.provider';
import { UuidFactory } from "../../shared/factories/uuid.factory.provider";
import { Logger } from '@nestjs/common';

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';




describe('DiscoveryController', () => {
  let app: INestApplication;
  let controller: DiscoveryController;
  let discoveryService: DiscoveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscoveryController],
      imports: [HttpModule],
      providers: [
        DiscoveryService,
        DiscoveryMapper,
        ProtocolServerService,
        ContextFactory,
        Logger,
        UuidFactory,
      ],
    }).compile();

    controller = module.get<DiscoveryController>(DiscoveryController);
    discoveryService = module.get<DiscoveryService>(DiscoveryService);

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should successfully make a search POST request to /client/v2/search', async () => {
    const response = await request(app.getHttpServer())
      .post('/client/v2/search')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        context: {
          domain: "Software Assurance",
          action: "search",
          version: "1.1.0",
          transaction_id: "ead489b8-81de-49a4-baf6-8d8de7eabf32",
          bpp_id: "openfort-oasp.ossverse.com",
          bpp_uri: "http://openfort-oasp.ossverse.com",
          bap_id: "bap.ossverse.com",
          bap_uri: "http://bap.ossverse.com",
          message_id: "1d07c819-695c-44ab-bd47-c21678a6ba4e",
          timestamp: "2023-10-09T04:46:28.012Z"
        },
        message: {
          criteria: {
            searchString: "beep",
            categoryName: "OSS Project"
          }
        }
      });

    console.log("=========test response start=========== ", response)
    console.log(" =========test response end===========",)
    expect(response.status).toBe(201); // Adjust based on actual response status code
  });
});
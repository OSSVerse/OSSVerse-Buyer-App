// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });

jest.setTimeout(300000); // Set timeout to 10 seconds for all tests

import { Test, TestingModule } from '@nestjs/testing';
import { GetQuoteController } from '../../modules/get_quote/get_quote.controller';
import { GetQuoteService } from "../../modules/get_quote/providers/get_quote.service";
import { GetQuoteMapper } from "../../modules/get_quote/mapper/get_quote.mapper";
import { ProtocolServerService } from "../../shared/providers/protocol-server.provider";
import { HttpModule } from '@nestjs/axios'; // Import the HttpModule
import { ContextFactory } from '../../shared/factories/context.factory.provider';
import { UuidFactory } from "../../shared/factories/uuid.factory.provider";
import { Logger } from '@nestjs/common';

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('GetQuoteController', () => {
  let app: INestApplication;
  let controller: GetQuoteController;
  let getQuoteService: GetQuoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetQuoteController],
      imports: [HttpModule],
      providers: [
        GetQuoteService,
        GetQuoteMapper,
        ProtocolServerService,
        ContextFactory,
        Logger,
        UuidFactory,
      ],
      /*{
        provide: GetQuoteService,
        useValue: {
          // Mock the actual method(s) used by the controller
          get: jest.fn().mockResolvedValue({ data: 'mocked response' }),
        },
      },*/

    }).compile();

    controller = module.get<GetQuoteController>(GetQuoteController);
    getQuoteService = module.get<GetQuoteService>(GetQuoteService);

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should successfully make a get_quote POST request to /client/v2/get_quote', async () => {
    const response = await request(app.getHttpServer())
      .post('/client/v2/get_quote')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        "selectRequestDto": [
          {
            "context": {
              "domain": "Software Assurance",
              "action": "select",
              "version": "1.1.0",
              "transaction_id": "ead489b8-81de-49a4-baf6-8d8de7eabf47",
              "bpp_id": "openfort-oasp.ossverse.com",
              "bpp_uri": "http://openfort-oasp.ossverse.com",
              "bap_id": "bap.ossverse.com",
              "bap_uri": "http://bap.ossverse.com",
              "message_id": "1d07c819-695c-44ab-bd47-c21678a6ba4e",
              "timestamp": "2023-10-09T04:46:28.012Z"
            },
            "message": {
              "order": {
                "provider": {
                  "id": "816e2270-b554-4b49-a084-d3e944e763c9"
                },
                "items": [
                  {
                    "id": "3a8a4647-bf75-4490-a63b-50215e47ccaa"
                  }
                ],
                "fulfillment": {}
              }
            }
          }
        ]
      });

    console.log("=========test response get_quote start=========== ", response)
    console.log(" =========test response get_quote end===========",)
    expect(response.status).toBe(201); // Adjust based on actual response status code
  });
});

// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });

jest.setTimeout(300000); // Set timeout to 10 seconds for all tests

import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmController } from '../../modules/confirm/confirm.controller';
import { ConfirmService } from "../../modules/confirm/providers/confirm.service";
//import { getModelToken } from '@nestjs/mongoose';
import { Order } from '../../modules/order/models/order.schema';


import { ConfirmMapper } from "../../modules/confirm/mapper/confirm.mapper"; // Adjust the import path as necessary
import { ProtocolServerService } from "../../shared/providers/protocol-server.provider";
import { HttpModule } from '@nestjs/axios'; // Import the HttpModule
import { ContextFactory } from '../../shared/factories/context.factory.provider';
import { UuidFactory } from "../../shared/factories/uuid.factory.provider";
import { Logger } from '@nestjs/common';

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('ConfirmController', () => {
  let app: INestApplication;
  let controller: ConfirmController;
  let confirmService: ConfirmService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfirmController],
      imports: [HttpModule],
      providers: [
        ConfirmService,
        ConfirmMapper,
        ProtocolServerService,
        ContextFactory,
        Logger,
        UuidFactory,
        Order
      ],
    }).compile();

    controller = module.get<ConfirmController>(ConfirmController);
    confirmService = module.get<ConfirmService>(ConfirmService);

    app = module.createNestApplication();
    await app.init();

  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should successfully make a confirm POST request to /client/v2/confirm', async () => {
    const response = await request(app.getHttpServer())
      .post('/client/v2/confirm')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        "confirmRequestDto": [
          {
            "context": {
              "domain": "Software Assurance",
              "action": "confirm",
              "version": "1.1.0",
              "transaction_id": "ead489b8-81de-49a4-baf6-8d8de7eabf47",
              "location": {
                "city": {
                  "name": "Bangalore",
                  "code": "std:080"
                },
                "country": {
                  "name": "India",
                  "code": "IND"
                }
              },
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
                "billing": {
                  "name": "Name",
                  "address": "address",
                  "state": {
                    "name": "Name"
                  },
                  "city": {
                    "name": "Name"
                  },
                  "email": "example@gmail.com",
                  "phone": "123456789"
                }
              }
            }
          }
        ],
        "userId": "123456"
      });

    console.log("=========test response confirm start=========== ", response)
    console.log(" =========test response confirm end===========",)
    expect(response.status).toBe(201); // Adjust based on actual response status code
  });

});

// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });

jest.setTimeout(300000); // Set timeout to 10 seconds for all tests

import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from '../../modules/status/status.controller';
import { StatusService } from "../../modules/status/providers/status.service";
import { FileUploadService } from "../../shared/providers/file-upload.provider"

import { OrderId } from "../../shared/models/order-id.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { StatusMapper } from "../../modules/status/mapper/status.mapper"; // Adjust the import path as necessary
import { ProtocolServerService } from "../../shared/providers/protocol-server.provider";
import { HttpModule } from '@nestjs/axios'; // Import the HttpModule
import { ContextFactory } from '../../shared/factories/context.factory.provider';
import { UuidFactory } from "../../shared/factories/uuid.factory.provider";
import { Logger } from '@nestjs/common';

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('StatusController', () => {
  let app: INestApplication;
  let controller: StatusController;
  let statusService: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      imports: [
        HttpModule,

      ],
      providers: [
        StatusService,
        FileUploadService,
        OrderId,
        StatusMapper,
        ProtocolServerService,
        ContextFactory,
        Logger,
        UuidFactory,
      ],
    }).compile();


    controller = module.get<StatusController>(StatusController);
    statusService = module.get<StatusService>(StatusService);

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should successfully make a status POST request to /client/v2/status', async () => {
    const response = await request(app.getHttpServer())
      .post('/client/v2/status')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        "statusRequestDto": [
          {
            "context": {
              "domain": "Software Assurance",
              "action": "status",
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
              "order_id": "order-$2a$10$1sTz0Axa5gco7eoAukptAONZnwEqjLBgey4nEDuc8q1Dkb6EbLOi6"
            }
          }
        ]
      });

    console.log("=========test response status start=========== ", response)
    console.log(" =========test response status end===========",)
    expect(response.status).toBe(201); // Adjust based on actual response status code
  });
});

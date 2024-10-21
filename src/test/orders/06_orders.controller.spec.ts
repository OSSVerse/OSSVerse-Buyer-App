// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.default' });

jest.setTimeout(300000); // Set timeout to 10 seconds for all tests

import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '../../modules/order/order.controller'; // Adjust the path to your controller
import { OrderService } from '../../modules/order/providers/order.service'; // Adjust the path to your service

import { Order, OrderSchema } from '../../modules/order/models/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { ProtocolServerService } from "../../shared/providers/protocol-server.provider";
import { HttpModule } from '@nestjs/axios'; // Import the HttpModule
import { ContextFactory } from '../../shared/factories/context.factory.provider';
import { UuidFactory } from "../../shared/factories/uuid.factory.provider";
import { Logger } from '@nestjs/common';

describe('OrdersController', () => {
    let app: INestApplication;
    let controller: OrderController;
    let ordersService: OrderService;


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OrderController],

            imports: [
                MongooseModule.forRoot('mongodb://admin:password@localhost:27017/'),
                MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
                HttpModule,
            ],

            providers: [
                OrderService,
                ProtocolServerService,
                ContextFactory,
                Logger,
                UuidFactory,

            ],
        }).compile();

        controller = module.get<OrderController>(OrderController);
        ordersService = module.get<OrderService>(OrderService);

        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await mongoose.connection.close();  // Close the MongoDB connection explicitly
        await app.close();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should successfully fetch orders for a given userId', async () => {
        const userId = '123456';

        const response = await request(app.getHttpServer())
            .get(`/client/v2/orders?userId=${userId}`)
            .set('accept', 'application/json');

        expect(response.status).toBe(200); // Adjust based on actual response status code

        //console.log("=========test response confirm start=========== ", response)
        //console.log(" =========test response confirm end===========",)

    });
});

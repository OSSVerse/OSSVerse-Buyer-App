"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderModule = void 0;
var common_1 = require("@nestjs/common");
var axios_1 = require("@nestjs/axios");
var order_schema_1 = require("../order/models/order.schema");
var mongoose_1 = require("@nestjs/mongoose");
var order_controller_1 = require("./order.controller");
var order_service_1 = require("./providers/order.service");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule, mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema }])],
            controllers: [order_controller_1.OrderController],
            providers: [order_service_1.OrderService, common_1.Logger, protocol_server_provider_1.ProtocolServerService, context_factory_provider_1.ContextFactory, uuid_factory_provider_1.UuidFactory]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;

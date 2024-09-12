"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmModule = void 0;
var common_1 = require("@nestjs/common");
var confirm_controller_1 = require("./confirm.controller");
var confirm_service_1 = require("./providers/confirm.service");
var confirm_mapper_1 = require("./mapper/confirm.mapper");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var axios_1 = require("@nestjs/axios");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var order_id_schema_1 = require("src/shared/models/order-id.schema");
var order_schema_1 = require("../order/models/order.schema");
var mongoose_1 = require("@nestjs/mongoose");
var ConfirmModule = /** @class */ (function () {
    function ConfirmModule() {
    }
    ConfirmModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule, mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema }]), mongoose_1.MongooseModule.forFeature([{ name: order_id_schema_1.OrderId.name, schema: order_id_schema_1.OrderIdSchema }])],
            controllers: [confirm_controller_1.ConfirmController],
            providers: [confirm_service_1.ConfirmService, confirm_mapper_1.ConfirmMapper, protocol_server_provider_1.ProtocolServerService, context_factory_provider_1.ContextFactory, uuid_factory_provider_1.UuidFactory, common_1.Logger]
        })
    ], ConfirmModule);
    return ConfirmModule;
}());
exports.ConfirmModule = ConfirmModule;

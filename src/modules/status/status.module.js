"use strict";
/*
https://docs.nestjs.com/modules
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatusModule = void 0;
var common_1 = require("@nestjs/common");
var status_controller_1 = require("./status.controller");
var status_service_1 = require("./providers/status.service");
var status_mapper_1 = require("./mapper/status.mapper");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var axios_1 = require("@nestjs/axios");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var file_upload_provider_1 = require("src/shared/providers/file-upload.provider");
var order_id_schema_1 = require("src/shared/models/order-id.schema");
var mongoose_1 = require("@nestjs/mongoose");
var StatusModule = /** @class */ (function () {
    function StatusModule() {
    }
    StatusModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule, mongoose_1.MongooseModule.forFeature([{ name: order_id_schema_1.OrderId.name, schema: order_id_schema_1.OrderIdSchema }])],
            controllers: [status_controller_1.StatusController],
            providers: [status_service_1.StatusService, file_upload_provider_1.FileUploadService, status_mapper_1.StatusMapper, protocol_server_provider_1.ProtocolServerService, context_factory_provider_1.ContextFactory, uuid_factory_provider_1.UuidFactory, common_1.Logger]
        })
    ], StatusModule);
    return StatusModule;
}());
exports.StatusModule = StatusModule;

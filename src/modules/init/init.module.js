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
exports.InitModule = void 0;
var common_1 = require("@nestjs/common");
var init_controller_1 = require("./init.controller");
var init_service_1 = require("./providers/init.service");
var init_mapper_1 = require("./mapper/init.mapper");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var axios_1 = require("@nestjs/axios");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var InitModule = /** @class */ (function () {
    function InitModule() {
    }
    InitModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            controllers: [init_controller_1.InitController],
            providers: [init_service_1.InitService, init_mapper_1.InitMapper, protocol_server_provider_1.ProtocolServerService, context_factory_provider_1.ContextFactory, uuid_factory_provider_1.UuidFactory, common_1.Logger]
        })
    ], InitModule);
    return InitModule;
}());
exports.InitModule = InitModule;

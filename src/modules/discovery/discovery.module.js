"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DiscoveryModule = void 0;
var common_1 = require("@nestjs/common");
var discovery_controller_1 = require("./discovery.controller");
var discovery_service_1 = require("./providers/discovery.service");
var discovery_mapper_1 = require("./mapper/discovery.mapper");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var axios_1 = require("@nestjs/axios");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var DiscoveryModule = /** @class */ (function () {
    function DiscoveryModule() {
    }
    DiscoveryModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            controllers: [discovery_controller_1.DiscoveryController],
            providers: [discovery_service_1.DiscoveryService, discovery_mapper_1.DiscoveryMapper, protocol_server_provider_1.ProtocolServerService, context_factory_provider_1.ContextFactory, uuid_factory_provider_1.UuidFactory, common_1.Logger]
        })
    ], DiscoveryModule);
    return DiscoveryModule;
}());
exports.DiscoveryModule = DiscoveryModule;

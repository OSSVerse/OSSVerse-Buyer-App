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
exports.TrackModule = void 0;
var common_1 = require("@nestjs/common");
var track_controller_1 = require("./track.controller");
var track_service_1 = require("./providers/track.service");
var track_mapper_1 = require("./mapper/track.mapper");
var protocol_server_provider_1 = require("src/shared/providers/protocol-server.provider");
var context_factory_provider_1 = require("src/shared/factories/context.factory.provider");
var axios_1 = require("@nestjs/axios");
var uuid_factory_provider_1 = require("src/shared/factories/uuid.factory.provider");
var TrackModule = /** @class */ (function () {
    function TrackModule() {
    }
    TrackModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            controllers: [track_controller_1.TrackController],
            providers: [
                track_service_1.TrackService,
                track_mapper_1.TrackMapper,
                protocol_server_provider_1.ProtocolServerService,
                context_factory_provider_1.ContextFactory,
                uuid_factory_provider_1.UuidFactory,
                common_1.Logger,
            ]
        })
    ], TrackModule);
    return TrackModule;
}());
exports.TrackModule = TrackModule;
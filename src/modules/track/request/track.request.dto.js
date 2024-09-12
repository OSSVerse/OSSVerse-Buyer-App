"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListTrackRequestDto = exports.TrackRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var TrackRequestMessageDto = /** @class */ (function () {
    function TrackRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], TrackRequestMessageDto.prototype, "order_id");
    return TrackRequestMessageDto;
}());
var TrackRequestDto = /** @class */ (function () {
    function TrackRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], TrackRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: TrackRequestMessageDto
        })
    ], TrackRequestDto.prototype, "message");
    return TrackRequestDto;
}());
exports.TrackRequestDto = TrackRequestDto;
var ListTrackRequestDto = /** @class */ (function () {
    function ListTrackRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [TrackRequestDto]
        })
    ], ListTrackRequestDto.prototype, "trackRequestDto");
    return ListTrackRequestDto;
}());
exports.ListTrackRequestDto = ListTrackRequestDto;

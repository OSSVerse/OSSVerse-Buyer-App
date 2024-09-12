"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListStatusRequestDto = exports.StatusRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var StatusRequestMessageDto = /** @class */ (function () {
    function StatusRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], StatusRequestMessageDto.prototype, "order_id");
    return StatusRequestMessageDto;
}());
var StatusRequestDto = /** @class */ (function () {
    function StatusRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], StatusRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: StatusRequestMessageDto
        })
    ], StatusRequestDto.prototype, "message");
    return StatusRequestDto;
}());
exports.StatusRequestDto = StatusRequestDto;
var ListStatusRequestDto = /** @class */ (function () {
    function ListStatusRequestDto() {
    }
    return ListStatusRequestDto;
}());
exports.ListStatusRequestDto = ListStatusRequestDto;

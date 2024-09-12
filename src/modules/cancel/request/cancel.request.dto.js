"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListCancelRequestDto = exports.CancelRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var CancelRequestMessageDto = /** @class */ (function () {
    function CancelRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], CancelRequestMessageDto.prototype, "order_id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], CancelRequestMessageDto.prototype, "cancellation_reason_id");
    return CancelRequestMessageDto;
}());
var CancelRequestDto = /** @class */ (function () {
    function CancelRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], CancelRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: CancelRequestMessageDto
        })
    ], CancelRequestDto.prototype, "message");
    return CancelRequestDto;
}());
exports.CancelRequestDto = CancelRequestDto;
var ListCancelRequestDto = /** @class */ (function () {
    function ListCancelRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [CancelRequestDto]
        })
    ], ListCancelRequestDto.prototype, "cancelRequestDto");
    return ListCancelRequestDto;
}());
exports.ListCancelRequestDto = ListCancelRequestDto;

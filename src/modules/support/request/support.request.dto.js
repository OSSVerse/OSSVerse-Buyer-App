"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListSupportRequestDto = exports.SupportRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var SupportRequestMessageDto = /** @class */ (function () {
    function SupportRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SupportRequestMessageDto.prototype, "uri");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SupportRequestMessageDto.prototype, "ref_id");
    return SupportRequestMessageDto;
}());
var SupportRequestDto = /** @class */ (function () {
    function SupportRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], SupportRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SupportRequestMessageDto
        })
    ], SupportRequestDto.prototype, "message");
    return SupportRequestDto;
}());
exports.SupportRequestDto = SupportRequestDto;
var ListSupportRequestDto = /** @class */ (function () {
    function ListSupportRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [SupportRequestDto]
        })
    ], ListSupportRequestDto.prototype, "supportRequestDto");
    return ListSupportRequestDto;
}());
exports.ListSupportRequestDto = ListSupportRequestDto;

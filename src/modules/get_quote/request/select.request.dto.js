"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListSelectRequestDto = exports.SelectRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var SelectProvider = /** @class */ (function () {
    function SelectProvider() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectProvider.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [String]
        })
    ], SelectProvider.prototype, "locations");
    return SelectProvider;
}());
var SelectLocation = /** @class */ (function () {
    function SelectLocation() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectLocation.prototype, "gps");
    return SelectLocation;
}());
var SelectEnd = /** @class */ (function () {
    function SelectEnd() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectLocation
        })
    ], SelectEnd.prototype, "location");
    return SelectEnd;
}());
var SelectStart = /** @class */ (function () {
    function SelectStart() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectLocation
        })
    ], SelectStart.prototype, "location");
    return SelectStart;
}());
var SelectFulfillment = /** @class */ (function () {
    function SelectFulfillment() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectFulfillment.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectStart
        })
    ], SelectFulfillment.prototype, "start");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectEnd
        })
    ], SelectFulfillment.prototype, "end");
    return SelectFulfillment;
}());
var SelectCount = /** @class */ (function () {
    function SelectCount() {
    }
    return SelectCount;
}());
var SelectItem = /** @class */ (function () {
    function SelectItem() {
    }
    return SelectItem;
}());
var SelectOrder = /** @class */ (function () {
    function SelectOrder() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectProvider
        })
    ], SelectOrder.prototype, "provider");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: []
        })
    ], SelectOrder.prototype, "items");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectFulfillment
        })
    ], SelectOrder.prototype, "fulfillment");
    return SelectOrder;
}());
var SelectRequestMessageDto = /** @class */ (function () {
    function SelectRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectOrder
        })
    ], SelectRequestMessageDto.prototype, "order");
    return SelectRequestMessageDto;
}());
var SelectRequestDto = /** @class */ (function () {
    function SelectRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], SelectRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectRequestMessageDto
        })
    ], SelectRequestDto.prototype, "message");
    return SelectRequestDto;
}());
exports.SelectRequestDto = SelectRequestDto;
var ListSelectRequestDto = /** @class */ (function () {
    function ListSelectRequestDto() {
    }
    return ListSelectRequestDto;
}());
exports.ListSelectRequestDto = ListSelectRequestDto;

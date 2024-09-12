"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var SearchCriteria = /** @class */ (function () {
    function SearchCriteria() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "searchString");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "providerId");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "categoryId");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "pickupLocation");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "dropLocation");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "providerName");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SearchCriteria.prototype, "categoryName");
    return SearchCriteria;
}());
var SearchRequestMessageDto = /** @class */ (function () {
    function SearchRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SearchCriteria
        })
    ], SearchRequestMessageDto.prototype, "criteria");
    return SearchRequestMessageDto;
}());
var SearchRequestDto = /** @class */ (function () {
    function SearchRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: {}
        })
    ], SearchRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SearchRequestMessageDto
        })
    ], SearchRequestDto.prototype, "message");
    return SearchRequestDto;
}());
exports.SearchRequestDto = SearchRequestDto;

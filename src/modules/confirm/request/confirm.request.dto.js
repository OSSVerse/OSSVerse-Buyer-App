"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListConfirmRequestDto = exports.ConfimRequestDto = exports.SelectPayment = exports.PaymentType = exports.Status = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
var class_validator_1 = require("class-validator");
var Status;
(function (Status) {
    Status["PAID"] = "PAID";
    Status["NOT_PAID"] = "NOT-PAID";
})(Status = exports.Status || (exports.Status = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["ON_ORDER"] = "ON-ORDER";
    PaymentType["PRE_FULFILLMENT"] = "PRE-FULFILLMENT";
    PaymentType["ON_FULFILLMENT"] = "ON-FULFILLMENT";
    PaymentType["POST_FULFILLMENT"] = "POST-FULFILLMENT";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
var AddressInfo = /** @class */ (function () {
    function AddressInfo() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "door");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "country");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "city");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "area_code");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "state");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "building");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], AddressInfo.prototype, "locality");
    return AddressInfo;
}());
var SelectPaymentParams = /** @class */ (function () {
    function SelectPaymentParams() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPaymentParams.prototype, "transactionId");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPaymentParams.prototype, "amount");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPaymentParams.prototype, "currency");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPaymentParams.prototype, "transaction_status");
    return SelectPaymentParams;
}());
var SelectPayment = /** @class */ (function () {
    function SelectPayment() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPayment.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        }),
        (0, class_validator_1.IsEnum)(PaymentType)
    ], SelectPayment.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectPaymentParams
        })
    ], SelectPayment.prototype, "params");
    __decorate([
        (0, class_validator_1.IsEnum)(Status)
    ], SelectPayment.prototype, "status");
    return SelectPayment;
}());
exports.SelectPayment = SelectPayment;
var BillingInfo = /** @class */ (function () {
    function BillingInfo() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: AddressInfo
        })
    ], BillingInfo.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], BillingInfo.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], BillingInfo.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], BillingInfo.prototype, "email");
    return BillingInfo;
}());
var SelectOrder = /** @class */ (function () {
    function SelectOrder() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectOrder.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: {}
        })
    ], SelectOrder.prototype, "provider");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: {}
        })
    ], SelectOrder.prototype, "items");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: {}
        })
    ], SelectOrder.prototype, "quote");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: {}
        })
    ], SelectOrder.prototype, "fulfillment");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectPayment
        })
    ], SelectOrder.prototype, "payment");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: BillingInfo
        })
    ], SelectOrder.prototype, "billing");
    return SelectOrder;
}());
var ConfirmRequestMessageDto = /** @class */ (function () {
    function ConfirmRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectOrder
        })
    ], ConfirmRequestMessageDto.prototype, "order");
    return ConfirmRequestMessageDto;
}());
var ConfimRequestDto = /** @class */ (function () {
    function ConfimRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], ConfimRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: ConfirmRequestMessageDto
        })
    ], ConfimRequestDto.prototype, "message");
    return ConfimRequestDto;
}());
exports.ConfimRequestDto = ConfimRequestDto;
var ListConfirmRequestDto = /** @class */ (function () {
    function ListConfirmRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [ConfimRequestDto]
        })
    ], ListConfirmRequestDto.prototype, "confirmRequestDto");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], ListConfirmRequestDto.prototype, "userId");
    return ListConfirmRequestDto;
}());
exports.ListConfirmRequestDto = ListConfirmRequestDto;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListInitRequestDto = exports.InitRequestDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_context_dto_1 = require("src/shared/models/client-context.dto");
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
var SelectDescriptor = /** @class */ (function () {
    function SelectDescriptor() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [String]
        })
    ], SelectDescriptor.prototype, "images");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectDescriptor.prototype, "name");
    return SelectDescriptor;
}());
var SelectCatDescriptor = /** @class */ (function () {
    function SelectCatDescriptor() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectCatDescriptor.prototype, "name");
    return SelectCatDescriptor;
}());
var SelectCategory = /** @class */ (function () {
    function SelectCategory() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectCatDescriptor
        })
    ], SelectCategory.prototype, "descriptor");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectCategory.prototype, "id");
    return SelectCategory;
}());
var SelectProvider = /** @class */ (function () {
    function SelectProvider() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [String]
        })
    ], SelectProvider.prototype, "locations");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectDescriptor
        })
    ], SelectProvider.prototype, "descriptor");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectProvider.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [SelectCategory]
        })
    ], SelectProvider.prototype, "categories");
    return SelectProvider;
}());
var Count = /** @class */ (function () {
    function Count() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number
        })
    ], Count.prototype, "count");
    return Count;
}());
var Quantity = /** @class */ (function () {
    function Quantity() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], Quantity.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        }),
        (0, swagger_1.ApiProperty)({
            type: Count
        })
    ], Quantity.prototype, "quantity");
    return Quantity;
}());
var item = /** @class */ (function () {
    function item() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], item.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], item.prototype, "fulfilment_id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectProvider
        })
    ], item.prototype, "provider");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Quantity
        })
    ], item.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: []
        })
    ], item.prototype, "locations");
    return item;
}());
// class item {
//   id: String
// }
var SelectPerson = /** @class */ (function () {
    function SelectPerson() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectPerson.prototype, "name");
    return SelectPerson;
}());
var SelectContact = /** @class */ (function () {
    function SelectContact() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectContact.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectContact.prototype, "email");
    return SelectContact;
}());
var SelectCustomer = /** @class */ (function () {
    function SelectCustomer() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectPerson
        })
    ], SelectCustomer.prototype, "person");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectContact
        })
    ], SelectCustomer.prototype, "contact");
    return SelectCustomer;
}());
var SelectFulfillment = /** @class */ (function () {
    function SelectFulfillment() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectCustomer
        })
    ], SelectFulfillment.prototype, "customer");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String
        })
    ], SelectFulfillment.prototype, "id");
    return SelectFulfillment;
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
            type: SelectFulfillment
        })
    ], SelectOrder.prototype, "fulfillment");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [item]
        })
    ], SelectOrder.prototype, "items");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: BillingInfo
        })
    ], SelectOrder.prototype, "billing");
    return SelectOrder;
}());
var InitRequestMessageDto = /** @class */ (function () {
    function InitRequestMessageDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: SelectOrder
        })
    ], InitRequestMessageDto.prototype, "order");
    return InitRequestMessageDto;
}());
var InitRequestDto = /** @class */ (function () {
    function InitRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: client_context_dto_1.ClientContext
        })
    ], InitRequestDto.prototype, "context");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: InitRequestMessageDto
        })
    ], InitRequestDto.prototype, "message");
    return InitRequestDto;
}());
exports.InitRequestDto = InitRequestDto;
var ListInitRequestDto = /** @class */ (function () {
    function ListInitRequestDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [InitRequestDto]
        })
    ], ListInitRequestDto.prototype, "initRequestDto");
    return ListInitRequestDto;
}());
exports.ListInitRequestDto = ListInitRequestDto;

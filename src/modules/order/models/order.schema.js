"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderSchema = exports.Order = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Order.prototype, "userId");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Order.prototype, "parentOrderId");
    __decorate([
        (0, mongoose_1.Prop)({ type: Object })
    ], Order.prototype, "orders");
    Order = __decorate([
        (0, mongoose_1.Schema)()
    ], Order);
    return Order;
}());
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);

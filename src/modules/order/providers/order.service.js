"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OrderService = void 0;
var common_1 = require("@nestjs/common");
var order_schema_1 = require("src/modules/order/models/order.schema");
var mongoose_1 = require("@nestjs/mongoose");
var api_config_1 = require("src/configs/api.config");
var OrderService = /** @class */ (function () {
    function OrderService(logger, protocolServerService, orderModel) {
        this.logger = logger;
        this.protocolServerService = protocolServerService;
        this.orderModel = orderModel;
    }
    OrderService.prototype.fetchOrders = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, filteredData, updatedResult, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.orderModel
                                .find({
                                userId: userId
                            })
                                .exec()];
                    case 1:
                        result = _a.sent();
                        console.log("RESULT ALL ORDER::::", JSON.stringify(result));
                        filteredData = result.filter(function (item) {
                            return item.orders.every(function (order) {
                                return order.message.responses.length > 0 &&
                                    !order.message.responses.some(function (response) { return "error" in response; });
                            });
                        });
                        console.log("Filtered Result from DB", filteredData);
                        return [4 /*yield*/, Promise.all(
                            // Parent Order loop
                            filteredData.map(function (userOrder) {
                                return Promise.all(
                                // Order Items
                                userOrder.orders.map(function (eachOrderItem) {
                                    var _a, _b, _c, _d, _e, _f, _g, _h;
                                    if (((_a = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _a === void 0 ? void 0 : _a.responses) === undefined ||
                                        ((_b = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _b === void 0 ? void 0 : _b.responses.length) === 0) {
                                        return {
                                            context: eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.context,
                                            message: {
                                                context: (_c = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _c === void 0 ? void 0 : _c.context,
                                                responses: (_d = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _d === void 0 ? void 0 : _d.responses
                                            }
                                        };
                                    }
                                    var payload = {
                                        context: __assign(__assign({}, (_e = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _e === void 0 ? void 0 : _e.context), { action: "status" }),
                                        message: {
                                            order_id: (_h = (_g = (_f = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _f === void 0 ? void 0 : _f.responses[0]) === null || _g === void 0 ? void 0 : _g.message) === null || _h === void 0 ? void 0 : _h.order.id
                                        }
                                    };
                                    return _this.protocolServerService
                                        .executeAction(api_config_1.becknUrl.status, payload)
                                        .then(function (orderStatus) {
                                        var _a;
                                        return {
                                            context: eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.context,
                                            message: {
                                                context: (_a = eachOrderItem === null || eachOrderItem === void 0 ? void 0 : eachOrderItem.message) === null || _a === void 0 ? void 0 : _a.context,
                                                responses: orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.responses
                                            }
                                        };
                                    });
                                })).then(function (reponseOrder) {
                                    return _this.orderModel
                                        .updateOne({
                                        parentOrderId: userOrder === null || userOrder === void 0 ? void 0 : userOrder.parentOrderId
                                    }, {
                                        orders: reponseOrder
                                    })
                                        .exec();
                                });
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.orderModel
                                .find({
                                userId: userId
                            })
                                .exec()];
                    case 3:
                        updatedResult = _a.sent();
                        return [2 /*return*/, updatedResult];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.error("error fetching orders", error_1);
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderService = __decorate([
        (0, common_1.Injectable)(),
        __param(2, (0, mongoose_1.InjectModel)(order_schema_1.Order.name))
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;

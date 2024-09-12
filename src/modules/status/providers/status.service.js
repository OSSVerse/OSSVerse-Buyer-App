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
exports.StatusService = void 0;
var common_1 = require("@nestjs/common");
var api_config_1 = require("src/configs/api.config");
var protocol_context_dto_1 = require("src/shared/models/protocol-context.dto");
var order_id_schema_1 = require("src/shared/models/order-id.schema");
var mongoose_1 = require("@nestjs/mongoose");
var StatusService = /** @class */ (function () {
    function StatusService(mapper, protocolServerService, contextFactory, fileuploadService, logger, uuidFactory, orderIdModel) {
        this.mapper = mapper;
        this.protocolServerService = protocolServerService;
        this.contextFactory = contextFactory;
        this.fileuploadService = fileuploadService;
        this.logger = logger;
        this.uuidFactory = uuidFactory;
        this.orderIdModel = orderIdModel;
    }
    StatusService.prototype.status = function (requestPayload) {
        return __awaiter(this, void 0, void 0, function () {
            var context, payload, result, qr_code, statusResponse, mappedResult, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        context = this.contextFactory.create(protocol_context_dto_1.ProtocolContextAction.STATUS, requestPayload.context.domain);
                        context.bpp_id = requestPayload.context.bpp_id;
                        context.bpp_uri = requestPayload.context.bpp_uri;
                        context.transaction_id = requestPayload.context.transaction_id;
                        payload = {
                            context: context,
                            message: {
                                order_id: requestPayload.message.order_id
                            }
                        };
                        this.logger.log("calling status api : payload", payload);
                        console.log("Input:::", requestPayload);
                        return [4 /*yield*/, this.protocolServerService.executeAction(api_config_1.becknUrl.status, payload)];
                    case 1:
                        result = _a.sent();
                        if (!((requestPayload.context.domain.trim().toLowerCase() === 'tourism') && requestPayload.order_object)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileuploadService.fileUpload(requestPayload.order_object)];
                    case 2:
                        qr_code = _a.sent();
                        result.responses[0].qr_url = qr_code;
                        _a.label = 3;
                    case 3: return [4 /*yield*/, Promise.all(result.responses.map(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            var id, fetchOrder;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = value.message.order.id;
                                        return [4 /*yield*/, this.fetchOrderId(id)];
                                    case 1:
                                        fetchOrder = _a.sent();
                                        return [2 /*return*/, __assign(__assign({}, value), { message: __assign(__assign({}, value.message), { order: __assign(__assign({}, value.message.order), { displayId: fetchOrder[0].displayOrderId }) }) })];
                                }
                            });
                        }); }))];
                    case 4:
                        statusResponse = _a.sent();
                        console.log("res", result);
                        console.log("status", statusResponse);
                        console.log("status_qr", statusResponse);
                        mappedResult = this.mapper.map(__assign(__assign({}, result), { responses: statusResponse }));
                        return [2 /*return*/, mappedResult];
                    case 5:
                        error_1 = _a.sent();
                        this.logger.error("error executing status call", error_1);
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.fetchOrderId = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.orderIdModel.find({
                            actualOrderId: orderId
                        }).exec()];
                }
                catch (error) {
                    this.logger.error("error fetching orders", error);
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    StatusService = __decorate([
        (0, common_1.Injectable)(),
        __param(6, (0, mongoose_1.InjectModel)(order_id_schema_1.OrderId.name))
    ], StatusService);
    return StatusService;
}());
exports.StatusService = StatusService;

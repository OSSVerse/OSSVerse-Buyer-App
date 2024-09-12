"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.DiscoveryService = void 0;
var common_1 = require("@nestjs/common");
var api_config_1 = require("src/configs/api.config");
var protocol_context_dto_1 = require("src/shared/models/protocol-context.dto");
var api_config_2 = require("../../../configs/api.config");
var DiscoveryService = /** @class */ (function () {
    function DiscoveryService(mapper, protocolServerService, contextFactory, logger) {
        this.mapper = mapper;
        this.protocolServerService = protocolServerService;
        this.contextFactory = contextFactory;
        this.logger = logger;
    }
    DiscoveryService.prototype.search = function (requestPayload) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var context, additionalPayload, fullfillment, paylaod, result, mappedResult, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        context = this.contextFactory.create(protocol_context_dto_1.ProtocolContextAction.SEARCH, requestPayload.context.domain);
                        additionalPayload = void 0;
                        fullfillment = {
                            start: {
                                location: requestPayload.message.criteria.pickupLocation ? {
                                    gps: requestPayload.message.criteria.pickupLocation
                                } : {}
                            },
                            end: {
                                location: {
                                    gps: requestPayload.message.criteria.dropLocation
                                }
                            }
                        };
                        if (requestPayload.context.domain === api_config_2.Domain.retail || requestPayload.context.domain === api_config_2.Domain.tourism) {
                            additionalPayload = {
                                fulfillment: fullfillment,
                                item: {
                                    descriptor: {
                                        name: requestPayload.message.criteria.searchString
                                    }
                                },
                                provider: {
                                    descriptor: {},
                                    id: (_a = requestPayload.message.criteria) === null || _a === void 0 ? void 0 : _a.providerId
                                },
                                category: {
                                    descriptor: {
                                        name: requestPayload.message.criteria.categoryName ? requestPayload.message.criteria.categoryName : "tourism"
                                    }
                                }
                            };
                        }
                        paylaod = void 0;
                        if (requestPayload.context.domain === api_config_2.Domain.retail || requestPayload.context.domain === api_config_2.Domain.tourism) {
                            paylaod = {
                                context: context,
                                message: {
                                    intent: additionalPayload
                                }
                            };
                        }
                        else {
                            paylaod = {
                                context: context,
                                message: {
                                    intent: {
                                        fulfillment: fullfillment
                                    }
                                }
                            };
                        }
                        this.logger.log("calling search endpoint of protocol server: requestpayload", requestPayload);
                        this.logger.log(paylaod);
                        return [4 /*yield*/, this.protocolServerService.executeAction(api_config_1.becknUrl.search, paylaod)];
                    case 1:
                        result = _b.sent();
                        console.log(result);
                        mappedResult = this.mapper.map(result);
                        return [2 /*return*/, mappedResult];
                    case 2:
                        error_1 = _b.sent();
                        this.logger.error("error executing searching point", error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DiscoveryService = __decorate([
        (0, common_1.Injectable)()
    ], DiscoveryService);
    return DiscoveryService;
}());
exports.DiscoveryService = DiscoveryService;

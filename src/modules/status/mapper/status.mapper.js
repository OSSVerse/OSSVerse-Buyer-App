"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatusMapper = void 0;
var common_1 = require("@nestjs/common");
var StatusMapper = /** @class */ (function () {
    function StatusMapper() {
    }
    StatusMapper.prototype.map = function (data) {
        return {
            context: data.context,
            message: data.responses[0].message,
            qr_url: data.responses[0].qr_url
        };
    };
    StatusMapper = __decorate([
        (0, common_1.Injectable)()
    ], StatusMapper);
    return StatusMapper;
}());
exports.StatusMapper = StatusMapper;
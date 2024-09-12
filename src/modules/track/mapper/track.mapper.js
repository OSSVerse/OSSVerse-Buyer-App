"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrackMapper = void 0;
var common_1 = require("@nestjs/common");
var TrackMapper = /** @class */ (function () {
    function TrackMapper() {
    }
    TrackMapper.prototype.map = function (data) {
        var _a;
        return {
            context: data.context,
            message: (_a = data.responses[0]) === null || _a === void 0 ? void 0 : _a.message
        };
    };
    TrackMapper = __decorate([
        (0, common_1.Injectable)()
    ], TrackMapper);
    return TrackMapper;
}());
exports.TrackMapper = TrackMapper;

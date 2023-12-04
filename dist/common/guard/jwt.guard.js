"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshJwtAuthGuard = exports.AccessJwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let AccessJwtAuthGuard = class AccessJwtAuthGuard extends (0, passport_1.AuthGuard)('access') {
};
exports.AccessJwtAuthGuard = AccessJwtAuthGuard;
exports.AccessJwtAuthGuard = AccessJwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], AccessJwtAuthGuard);
let RefreshJwtAuthGuard = class RefreshJwtAuthGuard extends (0, passport_1.AuthGuard)('refresh') {
};
exports.RefreshJwtAuthGuard = RefreshJwtAuthGuard;
exports.RefreshJwtAuthGuard = RefreshJwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], RefreshJwtAuthGuard);
//# sourceMappingURL=jwt.guard.js.map
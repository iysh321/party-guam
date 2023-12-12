"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../common/decorators/auth.decorator");
const jwt_guard_1 = require("../common/guard/jwt.guard");
const auth_service_1 = require("./auth.service");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async refreshTokens(authorization, account) {
        const [, token] = authorization.split(' ');
        const findRefreshToken = await this.authService.findRefreshToken(account.id, token);
        if (token !== findRefreshToken.refreshToken) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        const id = await this.authService.encrypt(String(account.id));
        const accessToken = await this.authService.createAccessToken(id);
        return { accessToken };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.RefreshJwtAuthGuard),
    (0, common_1.Post)('refresh-token'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, auth_decorator_1.CurrentAccount)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
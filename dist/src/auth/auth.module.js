"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("./auth.service");
const auth_entity_1 = require("./entity/auth.entity");
const access_strategy_1 = require("./access.strategy");
const auth_repository_1 = require("./repository/auth.repository");
const refresh_strategy_1 = require("./refresh.strategy");
const auth_controller_1 = require("./auth.controller");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [access_strategy_1.AccessStrategy, refresh_strategy_1.RefreshStrategy, auth_repository_1.AuthRepository, auth_service_1.AuthService],
        imports: [
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
            }),
            typeorm_1.TypeOrmModule.forFeature([auth_entity_1.AuthEntity]),
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
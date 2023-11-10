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
exports.KakaoLoginHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const auth_service_1 = require("../../../auth/auth.service");
const kakao_login_command_1 = require("./kakao-login.command");
const axios_1 = require("axios");
let KakaoLoginHandler = class KakaoLoginHandler {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async execute({ access_token }) {
        let userId;
        const kakaoUserInfo = await axios_1.default.get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
        console.log('kakao userInfo', kakaoUserInfo);
        const user = await this.userRepository.findByAccount(kakaoUserInfo.data.id);
        if (!user) {
            const save = await this.userRepository.create(kakaoUserInfo.data.id, kakaoUserInfo.data.kakao_account.name, kakaoUserInfo.data.kakao_account.email);
            userId = save.id;
        }
        else {
            userId = user.getId();
        }
        const encryptId = await this.authService.encrypt(String(userId));
        const accessToken = await this.authService.createAccessToken(encryptId);
        const refreshToken = await this.authService.createRefreshToken(encryptId);
        this.authService.saveRefreshToken(userId, refreshToken);
        return { accessToken, refreshToken };
    }
};
exports.KakaoLoginHandler = KakaoLoginHandler;
exports.KakaoLoginHandler = KakaoLoginHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(kakao_login_command_1.KakaoLoginCommand),
    __param(0, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [Object, auth_service_1.AuthService])
], KakaoLoginHandler);
//# sourceMappingURL=kakao-login.handler.js.map
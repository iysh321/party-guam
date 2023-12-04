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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto = require("crypto");
const auth_repository_1 = require("./repository/auth.repository");
let AuthService = class AuthService {
    constructor(jwtService, authRepository) {
        this.jwtService = jwtService;
        this.authRepository = authRepository;
        this.algorithm = 'aes-192-cbc';
        this.key = Buffer.from(process.env.CIPHERIV_KEY_SECRET, 'hex');
        this.iv = Buffer.from(process.env.CIPHERIV_IV_SECRET, 'hex');
    }
    async createAccessToken(id) {
        const payload = { id };
        return this.jwtService.signAsync(payload, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '15m' });
    }
    async createRefreshToken(id) {
        const payload = { id };
        return this.jwtService.signAsync(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '30d' });
    }
    async findRefreshToken(userId, refreshToken) {
        const result = this.authRepository.findRefreshToken(userId, refreshToken);
        return result;
    }
    async saveRefreshToken(id, token) {
        this.authRepository.saveRefreshToken(id, token);
    }
    async encrypt(data) {
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        let result = cipher.update(data, 'utf-8', 'base64');
        result += cipher.final('base64');
        return result;
    }
    decrypt(encryptedData) {
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
        let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
        decryptedData += decipher.final('utf-8');
        return decryptedData;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_repository_1.AuthRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map
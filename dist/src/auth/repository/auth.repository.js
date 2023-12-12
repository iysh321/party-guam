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
exports.AuthRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const auth_entity_1 = require("../entity/auth.entity");
let AuthRepository = class AuthRepository {
    constructor(dataSource, authRepository) {
        this.dataSource = dataSource;
        this.authRepository = authRepository;
    }
    async findByAccount(userId) {
        const result = await this.authRepository.findOne({
            where: { userId },
        });
        return result;
    }
    async findRefreshToken(userId, refreshToken) {
        const result = this.authRepository.findOne({ where: { userId, refreshToken } });
        return result;
    }
    async saveRefreshToken(userId, refreshToken) {
        const result = await this.authRepository.save({ userId, refreshToken });
        return result;
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(auth_entity_1.AuthEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map
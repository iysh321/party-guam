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
exports.UserByNicknameHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../infra/db/entity/user.entity");
const typeorm_2 = require("typeorm");
const get_user_by_nickname_query_1 = require("./get-user-by-nickname.query");
let UserByNicknameHandler = class UserByNicknameHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(query) {
        const { nickname } = query;
        const user = await this.userRepository.findOne({
            where: { nickname },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저가 존재하지 않습니다');
        }
        return user;
    }
};
exports.UserByNicknameHandler = UserByNicknameHandler;
exports.UserByNicknameHandler = UserByNicknameHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_user_by_nickname_query_1.UserByNicknameQuery),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserByNicknameHandler);
//# sourceMappingURL=get-user-by-nickname.handler.js.map
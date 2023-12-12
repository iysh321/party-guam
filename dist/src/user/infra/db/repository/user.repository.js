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
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const user_factory_1 = require("../../../domain/user/user.factory");
let UserRepository = class UserRepository {
    constructor(dataSource, userRepository, userFactory) {
        this.dataSource = dataSource;
        this.userRepository = userRepository;
        this.userFactory = userFactory;
    }
    async findByAccount(account) {
        const userEntity = await this.userRepository.findOne({
            where: { account },
        });
        if (!userEntity) {
            return null;
        }
        const { id, nickname, email } = userEntity;
        return this.userFactory.reconstitute(id, account, nickname, email);
    }
    async findByNickname(nickname) {
        const userEntity = await this.userRepository.findOne({
            where: { nickname },
        });
        if (!userEntity) {
            return null;
        }
        const { id, account, email } = userEntity;
        return this.userFactory.reconstitute(id, account, nickname, email);
    }
    async create(account, nickname, email) {
        const result = await this.userRepository.save({ account, nickname, email });
        return result;
    }
    async update(is_party, meeting_type, meeting_week, meeting_time, mbti) {
        await this.dataSource.transaction(async (manager) => {
            const user = await this.userRepository.save({ is_party, meeting_type, meeting_week, meeting_time, mbti });
            await manager.save(user);
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        user_factory_1.UserFactory])
], UserRepository);
//# sourceMappingURL=user.repository.js.map
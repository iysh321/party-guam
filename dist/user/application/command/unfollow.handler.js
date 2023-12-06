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
exports.UnFollowHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const user_factory_1 = require("../../domain/user/user.factory");
const unfollow_command_1 = require("./unfollow.command");
let UnFollowHandler = class UnFollowHandler {
    constructor(userFactory, followRepository, userRepository) {
        this.userFactory = userFactory;
        this.followRepository = followRepository;
        this.userRepository = userRepository;
    }
    async execute(command) {
        const { userId, nickname } = command;
        const followUser = await this.userRepository.findByNickname(nickname);
        if (!followUser) {
            throw new common_1.BadRequestException('유효하지 않는 유저 입니다.');
        }
        const result = await this.followRepository.delete(userId, followUser.id);
        return result;
    }
};
exports.UnFollowHandler = UnFollowHandler;
exports.UnFollowHandler = UnFollowHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(unfollow_command_1.UnfollowCommand),
    __param(1, (0, common_1.Inject)('FollowRepository')),
    __param(2, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [user_factory_1.UserFactory, Object, Object])
], UnFollowHandler);
//# sourceMappingURL=unfollow.handler.js.map
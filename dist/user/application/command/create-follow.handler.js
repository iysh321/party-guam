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
exports.CreateFollowHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const user_factory_1 = require("../../domain/user/user.factory");
const create_follow_command_1 = require("./create-follow.command");
let CreateFollowHandler = class CreateFollowHandler {
    constructor(userFactory, followRepository, userRepository) {
        this.userFactory = userFactory;
        this.followRepository = followRepository;
        this.userRepository = userRepository;
    }
    async execute(command) {
        const { userId, nickname } = command;
        const followUser = await this.userRepository.findByAccount(nickname);
        await this.followRepository.create(userId, followUser.id);
        const save = await this.followRepository.create(userId, followUser.id);
        return save;
    }
};
exports.CreateFollowHandler = CreateFollowHandler;
exports.CreateFollowHandler = CreateFollowHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(create_follow_command_1.CreateFollowCommand),
    __param(1, (0, common_1.Inject)('FollowRepository')),
    __param(2, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [user_factory_1.UserFactory, Object, Object])
], CreateFollowHandler);
//# sourceMappingURL=create-follow.handler.js.map
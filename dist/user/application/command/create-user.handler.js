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
exports.CreateUserHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_1 = require("./create-user.command");
const user_factory_1 = require("../../domain/user/user.factory");
let CreateUserHandler = class CreateUserHandler {
    constructor(userFactory, userRepository) {
        this.userFactory = userFactory;
        this.userRepository = userRepository;
    }
    async execute(command) {
        const { account, nickname, email } = command;
        const verify = await this.userRepository.findByAccount(account);
        if (verify !== null) {
            throw new common_1.ConflictException('유저가 이미 존재 합니다.');
        }
        const save = await this.userRepository.create(account, nickname, email);
        this.userFactory.create(save.id, account, email, email);
        return save;
    }
};
exports.CreateUserHandler = CreateUserHandler;
exports.CreateUserHandler = CreateUserHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(create_user_command_1.CreateUserCommand),
    __param(1, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [user_factory_1.UserFactory, Object])
], CreateUserHandler);
//# sourceMappingURL=create-user.handler.js.map
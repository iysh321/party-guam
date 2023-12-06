"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./interface/user.controller");
const user_service_1 = require("./application/user.service");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./infra/db/entity/user.entity");
const create_user_handler_1 = require("./application/command/create-user.handler");
const kakao_login_handler_1 = require("./application/command/kakao-login.handler");
const get_user_handler_1 = require("./application/query/get-user.handler");
const user_factory_1 = require("./domain/user/user.factory");
const user_repository_1 = require("./infra/db/repository/user.repository");
const auth_module_1 = require("../auth/auth.module");
const get_users_handler_1 = require("./application/query/get-users.handler");
const get_user_by_nickname_handler_1 = require("./application/query/get-user-by-nickname.handler");
const follow_handler_1 = require("./application/command/follow.handler");
const unfollow_handler_1 = require("./application/command/unfollow.handler");
const follow_repository_1 = require("./infra/db/repository/follow.repository");
const follow_entity_1 = require("./infra/db/entity/follow.entity");
const follow_factory_1 = require("./domain/follow/follow.factory");
const get_follow_handler_1 = require("./application/query/get-follow.handler");
const commandHandlers = [create_user_handler_1.CreateUserHandler, kakao_login_handler_1.KakaoLoginHandler, follow_handler_1.FollowHandler, unfollow_handler_1.UnFollowHandler];
const queryHandlers = [get_user_by_nickname_handler_1.UserByNicknameHandler, get_user_handler_1.GetUserHandler, get_users_handler_1.GetUsersHandler, get_follow_handler_1.GetFollowHandler];
const eventHandlers = [];
const factories = [user_factory_1.UserFactory, follow_factory_1.FollowFactory];
const repositories = [
    { provide: 'UserRepository', useClass: user_repository_1.UserRepository },
    { provide: 'FollowRepository', useClass: follow_repository_1.FollowRepository },
];
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, ...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
        imports: [cqrs_1.CqrsModule, auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, follow_entity_1.FollowEntity])],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map
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
exports.UserController = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const jwt_guard_1 = require("../../common/guard/jwt.guard");
const kakao_login_command_1 = require("../application/command/kakao-login.command");
const create_user_command_1 = require("../application/command/create-user.command");
const update_user_command_1 = require("../application/command/update-user.command");
const follow_command_1 = require("../application/command/follow.command");
const unfollow_command_1 = require("../application/command/unfollow.command");
const create_user_request_dto_1 = require("./dto/request/create-user.request.dto");
const user_login_request_dto_1 = require("./dto/request/user-login.request.dto");
const update_user_request_dto_1 = require("./dto/request/update-user.request.dto");
const user_param_request_dto_1 = require("./dto/request/user.param.request.dto");
const user_query_request_dto_1 = require("./dto/request/user.query.request.dto");
const get_user_by_nickname_query_1 = require("../application/query/get-user-by-nickname.query");
const get_user_query_1 = require("../application/query/get-user.query");
const get_users_query_1 = require("../application/query/get-users.query");
const UserResponseDto_1 = require("./dto/response/UserResponseDto");
const follow_user_request_dto_1 = require("./dto/request/follow.user.request.dto");
const get_follow_query_1 = require("../application/query/get-follow.query");
let UserController = class UserController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createUser(res, dto) {
        const { account, nickname, email } = dto;
        const command = new create_user_command_1.CreateUserCommand(account, nickname, email);
        const reuslt = await this.commandBus.execute(command);
        res.cookie('refreshToken', reuslt.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
        res.send({ accessToken: reuslt.accessToken });
    }
    async login(res, dto) {
        const { access_token } = dto;
        const command = new kakao_login_command_1.KakaoLoginCommand(access_token);
        const reuslt = await this.commandBus.execute(command);
        res.cookie('refreshToken', reuslt.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
        res.send({ accessToken: reuslt.accessToken });
    }
    async updateUser(dto) {
        const { is_party, meeting_type, meeting_week, meeting_time, mbti } = dto;
        const command = new update_user_command_1.UpdateUserCommand(is_party, meeting_type, meeting_week, meeting_time, mbti);
        return this.commandBus.execute(command);
    }
    async getUsers(query) {
        const { page, limit, sort, order } = query;
        const userInfoByNickname = new get_users_query_1.GetUsersQuery(page, limit, sort, order);
        const result = this.queryBus.execute(userInfoByNickname);
        return (0, class_transformer_1.plainToInstance)(UserResponseDto_1.UserResponseDto, result);
    }
    async getMyInfo(account) {
        const getUserInfoQuery = new get_user_query_1.GetUserQuery(account.id);
        const result = this.queryBus.execute(getUserInfoQuery);
        return (0, class_transformer_1.plainToInstance)(UserResponseDto_1.UserResponseDto, result);
    }
    async getUser(param) {
        const userInfoByNickname = new get_user_by_nickname_query_1.UserByNicknameQuery(param.nickname);
        const result = this.queryBus.execute(userInfoByNickname);
        return (0, class_transformer_1.plainToInstance)(UserResponseDto_1.UserResponseDto, result);
    }
    async getFollow(payload, query) {
        const { page, limit, sort, order } = query;
        const userInfoByNickname = new get_follow_query_1.GetFollowQuery(payload.id, page, limit, sort, order);
        return await this.queryBus.execute(userInfoByNickname);
    }
    async follow(payload, param) {
        const command = new follow_command_1.FollowCommand(payload.id, param.nickname);
        await this.commandBus.execute(command);
    }
    async unfollow(payload, param) {
        const command = new unfollow_command_1.UnfollowCommand(payload.id, param.nickname);
        await this.commandBus.execute(command);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: '일반 회원가입 (카카오 로그인 안될 시 테스트용 구현, 카카오 완료시 삭제)' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_request_dto_1.CreateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('kakao/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Kakao 로그인 / 자동 회원가입' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_login_request_dto_1.UserLoginRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Patch)('info'),
    (0, swagger_1.ApiOperation)({ summary: '추가 정보 기입 또는 수정' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_request_dto_1.UpdateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: '유저 다수 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 유저 목록을 가져왔습니다.',
        type: UserResponseDto_1.UsersResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_query_request_dto_1.UserQueryRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiOperation)({ summary: '내정보 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 내정보 목록을 가져왔습니다.',
        type: UserResponseDto_1.UserResponseDto,
    }),
    __param(0, (0, auth_decorator_1.CurrentAccount)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMyInfo", null);
__decorate([
    (0, common_1.Get)('info/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '닉네임으로 유저 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 유저 목록을 가져왔습니다.',
        type: UserResponseDto_1.UserResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_param_request_dto_1.UserParamRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Get)('follow'),
    (0, swagger_1.ApiOperation)({ summary: '팔로워, 팔로잉 목록 조회' }),
    __param(0, (0, auth_decorator_1.CurrentAccount)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, follow_user_request_dto_1.FollowQueryRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFollow", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Post)('follow/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '팔로우' }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: '성공적으로 팔로우 되었습니다.',
    }),
    __param(0, (0, auth_decorator_1.CurrentAccount)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_param_request_dto_1.UserParamRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "follow", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Delete)('unfollow/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '언팔로우' }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: '성공적으로 언팔로우 되었습니다.',
    }),
    __param(0, (0, auth_decorator_1.CurrentAccount)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_param_request_dto_1.UserParamRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "unfollow", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UserController);
//# sourceMappingURL=user.controller.js.map
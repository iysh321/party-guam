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
exports.GetFollowHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const follow_entity_1 = require("../../infra/db/entity/follow.entity");
const user_entity_1 = require("../../infra/db/entity/user.entity");
const typeorm_2 = require("typeorm");
const get_follow_query_1 = require("./get-follow.query");
let GetFollowHandler = class GetFollowHandler {
    constructor(userRepository, followRepository) {
        this.userRepository = userRepository;
        this.followRepository = followRepository;
    }
    async execute(query) {
        const { userId, page, limit, sort, order } = query;
        const offset = (page - 1) * limit || 0;
        const followerCount = await this.followRepository
            .createQueryBuilder('follow')
            .select('COUNT(follow.followId)', 'total')
            .where('follow.followId = :followId', { followId: userId })
            .getRawOne();
        const followingCount = await this.followRepository
            .createQueryBuilder('follow')
            .select('COUNT(follow.userId)', 'total')
            .where('follow.userId = :userId', { userId })
            .getRawOne();
        const target = sort === 'follower' ? 'followId' : 'userId';
        const user = await this.followRepository
            .createQueryBuilder('follow')
            .leftJoin(`follow.${sort}`, `${sort}`)
            .select([`${sort}.nickname AS nickname`, `${sort}.image AS image`])
            .limit(limit)
            .offset(offset)
            .orderBy(`follow.createdAt`, order)
            .where(`follow.${target} = :userId`, { userId })
            .getRawMany();
        return { followerCount: followerCount.total, followingCount: followingCount.total, [sort]: user };
    }
};
exports.GetFollowHandler = GetFollowHandler;
exports.GetFollowHandler = GetFollowHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_follow_query_1.GetFollowQuery),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(follow_entity_1.FollowEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GetFollowHandler);
//# sourceMappingURL=get-follow.handler.js.map
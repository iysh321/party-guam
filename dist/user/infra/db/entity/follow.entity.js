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
exports.FollowEntity = void 0;
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
let FollowEntity = class FollowEntity {
};
exports.FollowEntity = FollowEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FollowEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FollowEntity.prototype, "followId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FollowEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.followers, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FollowEntity.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (users) => users.followings, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'follow_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FollowEntity.prototype, "following", void 0);
exports.FollowEntity = FollowEntity = __decorate([
    (0, typeorm_1.Entity)('follow'),
    (0, typeorm_1.Index)('unique_follower_following', ['userId', 'followId'], { unique: true })
], FollowEntity);
//# sourceMappingURL=follow.entity.js.map
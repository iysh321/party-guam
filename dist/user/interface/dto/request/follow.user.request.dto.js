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
exports.FollowQueryRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FollowQueryRequestDto {
}
exports.FollowQueryRequestDto = FollowQueryRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'page',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FollowQueryRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: '최대 조회 수',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FollowQueryRequestDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['follower', 'following'],
        description: '팔로워, 팔로잉',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['follower', 'following']),
    __metadata("design:type", String)
], FollowQueryRequestDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['ASC', 'DESC'],
        description: '오름, 내림차순',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ASC', 'DESC']),
    __metadata("design:type", String)
], FollowQueryRequestDto.prototype, "order", void 0);
//# sourceMappingURL=follow.user.request.dto.js.map
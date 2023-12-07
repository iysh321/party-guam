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
exports.FollowResponseDto = exports.FollowUserResponseDto = exports.FollowCountsResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let FollowCountsResponseDto = class FollowCountsResponseDto {
};
exports.FollowCountsResponseDto = FollowCountsResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FollowCountsResponseDto.prototype, "followerCount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FollowCountsResponseDto.prototype, "followingCount", void 0);
exports.FollowCountsResponseDto = FollowCountsResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], FollowCountsResponseDto);
let FollowUserResponseDto = class FollowUserResponseDto {
};
exports.FollowUserResponseDto = FollowUserResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        example: '닉네임넣는자리',
    }),
    __metadata("design:type", Number)
], FollowUserResponseDto.prototype, "nickname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        example: 'image url',
    }),
    __metadata("design:type", String)
], FollowUserResponseDto.prototype, "image", void 0);
exports.FollowUserResponseDto = FollowUserResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], FollowUserResponseDto);
class FollowResponseDto {
}
exports.FollowResponseDto = FollowResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", FollowCountsResponseDto)
], FollowResponseDto.prototype, "counts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", FollowUserResponseDto)
], FollowResponseDto.prototype, "users", void 0);
//# sourceMappingURL=FollowResponseDto.js.map
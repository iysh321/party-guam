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
exports.UserQueryRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserQueryRequestDto {
}
exports.UserQueryRequestDto = UserQueryRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'page',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserQueryRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: '최대 조회 수',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserQueryRequestDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['createdAt'],
        description: 'order 조회 기준',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['createdAt']),
    __metadata("design:type", String)
], UserQueryRequestDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['ASC', 'DESC'],
        description: '오름, 내림차순',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ASC', 'DESC']),
    __metadata("design:type", String)
], UserQueryRequestDto.prototype, "order", void 0);
//# sourceMappingURL=user.query.request.dto.js.map
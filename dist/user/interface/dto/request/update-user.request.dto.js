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
exports.UpdateUserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../../infra/db/entity/user.entity");
class UpdateUserRequestDto {
}
exports.UpdateUserRequestDto = UpdateUserRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: true,
        description: '모임참석여부',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateUserRequestDto.prototype, "is_party", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: user_entity_1.MeetingType.OFFLINE,
        description: '모임참석형태',
        enum: user_entity_1.MeetingType,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "meeting_type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: user_entity_1.MeetingWeekType.WEEKDAY,
        description: '모임참석 주중, 주말',
        enum: user_entity_1.MeetingWeekType,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "meeting_week", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: user_entity_1.MeetingTimeType.AM,
        description: '모임참석 시간',
        enum: user_entity_1.MeetingTimeType,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "meeting_time", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'intp',
        description: 'mbti',
        enum: [
            'entp',
            'enfp',
            'entj',
            'enfj',
            'estp',
            'esfp',
            'estj',
            'esfj',
            'intp',
            'infp',
            'intj',
            'infj',
            'istp',
            'isfp',
            'istj',
            'isfj',
        ],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "mbti", void 0);
//# sourceMappingURL=update-user.request.dto.js.map
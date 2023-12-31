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
exports.CreatePartyRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePartyRequestDto {
}
exports.CreatePartyRequestDto = CreatePartyRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '파티구함',
        description: '제목',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePartyRequestDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '풀스텍 구함',
        description: '본문',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePartyRequestDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '글쓴이 참여할 포지션 position id(pk)',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePartyRequestDto.prototype, "positionId", void 0);
//# sourceMappingURL=create-party.request.dto.js.map
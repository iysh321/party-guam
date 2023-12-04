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
exports.AuthEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/infra/db/entity/user.entity");
let AuthEntity = class AuthEntity {
};
exports.AuthEntity = AuthEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user_id',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AuthEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], AuthEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AuthEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => user.auth, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'id' }]),
    __metadata("design:type", user_entity_1.UserEntity)
], AuthEntity.prototype, "user", void 0);
exports.AuthEntity = AuthEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'auth' })
], AuthEntity);
//# sourceMappingURL=auth.entity.js.map
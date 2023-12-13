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
exports.PositionEntity = void 0;
const party_user_entity_1 = require("../../party/infra/db/entity/party/party-user.entity");
const user_entity_1 = require("../../user/infra/db/entity/user.entity");
const typeorm_1 = require("typeorm");
let PositionEntity = class PositionEntity {
};
exports.PositionEntity = PositionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PositionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PositionEntity.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_user_entity_1.PartyUserEntity, (position) => position.position),
    __metadata("design:type", Array)
], PositionEntity.prototype, "partyUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.UserEntity, (user) => user.positions),
    __metadata("design:type", user_entity_1.UserEntity)
], PositionEntity.prototype, "users", void 0);
exports.PositionEntity = PositionEntity = __decorate([
    (0, typeorm_1.Entity)('postion')
], PositionEntity);
//# sourceMappingURL=position.entity.js.map
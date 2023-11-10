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
exports.PartyUserEntity = void 0;
const user_entity_1 = require("../../user/infra/db/entity/user.entity");
const typeorm_1 = require("typeorm");
const party_entity_1 = require("../post/party.entity");
let PartyUserEntity = class PartyUserEntity {
};
exports.PartyUserEntity = PartyUserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PartyUserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.parties),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PartyUserEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => party_entity_1.PartyEntity, (post) => post.partyUser),
    (0, typeorm_1.JoinColumn)({ name: 'party_post_id' }),
    __metadata("design:type", party_entity_1.PartyEntity)
], PartyUserEntity.prototype, "party", void 0);
exports.PartyUserEntity = PartyUserEntity = __decorate([
    (0, typeorm_1.Entity)('party_user')
], PartyUserEntity);
//# sourceMappingURL=party-user.entity.js.map
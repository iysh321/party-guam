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
exports.PartyLikeEntity = void 0;
const typeorm_1 = require("typeorm");
const party_entity_1 = require("./party.entity");
const user_entity_1 = require("../../../../../user/infra/db/entity/user.entity");
let PartyLikeEntity = class PartyLikeEntity {
};
exports.PartyLikeEntity = PartyLikeEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PartyLikeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PartyLikeEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PartyLikeEntity.prototype, "partyId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PartyLikeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PartyLikeEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => party_entity_1.PartyEntity, (post) => post.partyLikes),
    (0, typeorm_1.JoinColumn)({ name: 'party_id', referencedColumnName: 'id' }),
    __metadata("design:type", party_entity_1.PartyEntity)
], PartyLikeEntity.prototype, "party", void 0);
exports.PartyLikeEntity = PartyLikeEntity = __decorate([
    (0, typeorm_1.Entity)('party_like'),
    (0, typeorm_1.Unique)(['userId', 'partyId'])
], PartyLikeEntity);
//# sourceMappingURL=party-like.entity.js.map
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
exports.PartyCommentEntity = void 0;
const typeorm_1 = require("typeorm");
const party_entity_1 = require("../post/party.entity");
let PartyCommentEntity = class PartyCommentEntity {
};
exports.PartyCommentEntity = PartyCommentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PartyCommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => party_entity_1.PartyEntity, (post) => post.comments),
    (0, typeorm_1.JoinColumn)({ name: 'party_post_id' }),
    __metadata("design:type", party_entity_1.PartyEntity)
], PartyCommentEntity.prototype, "party", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PartyCommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], PartyCommentEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], PartyCommentEntity.prototype, "updated_at", void 0);
exports.PartyCommentEntity = PartyCommentEntity = __decorate([
    (0, typeorm_1.Entity)('party_comment')
], PartyCommentEntity);
//# sourceMappingURL=party-comment.entity.js.map
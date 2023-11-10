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
exports.PartyEntity = void 0;
const typeorm_1 = require("typeorm");
const party_user_entity_1 = require("../party/party-user.entity");
const party_comment_entity_1 = require("../comment/party-comment.entity");
const party_like_entity_1 = require("./party-like.entity");
const party_recruitment_entity_1 = require("../apply/party-recruitment.entity");
const party_proposal_entity_1 = require("../apply/party-proposal.entity");
let PartyEntity = class PartyEntity {
};
exports.PartyEntity = PartyEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PartyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyEntity.prototype, "party_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyEntity.prototype, "project_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_user_entity_1.PartyUserEntity, (party) => party.party),
    __metadata("design:type", Array)
], PartyEntity.prototype, "partyUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_like_entity_1.PartyLike, (party) => party.party),
    __metadata("design:type", Array)
], PartyEntity.prototype, "partyLikes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_comment_entity_1.PartyCommentEntity, (comment) => comment.party),
    __metadata("design:type", Array)
], PartyEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_proposal_entity_1.PartyProposalEntity, (comment) => comment.party),
    __metadata("design:type", Array)
], PartyEntity.prototype, "partyProposals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_recruitment_entity_1.PartyRecruitmentEntity, (comment) => comment.party),
    __metadata("design:type", Array)
], PartyEntity.prototype, "partyRecruitments", void 0);
exports.PartyEntity = PartyEntity = __decorate([
    (0, typeorm_1.Entity)()
], PartyEntity);
//# sourceMappingURL=party.entity.js.map
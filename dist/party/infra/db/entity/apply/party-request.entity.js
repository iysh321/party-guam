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
exports.PartyRequestEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../../../user/infra/db/entity/user.entity");
const party_entity_1 = require("../party/party.entity");
let PartyRequestEntity = class PartyRequestEntity {
};
exports.PartyRequestEntity = PartyRequestEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PartyRequestEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyRequestEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], PartyRequestEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PartyRequestEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.partyRequests, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PartyRequestEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => party_entity_1.PartyEntity, (post) => post.partyRequests, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'party_post_id' }),
    __metadata("design:type", party_entity_1.PartyEntity)
], PartyRequestEntity.prototype, "party", void 0);
exports.PartyRequestEntity = PartyRequestEntity = __decorate([
    (0, typeorm_1.Entity)('party_request')
], PartyRequestEntity);
//# sourceMappingURL=party-request.entity.js.map
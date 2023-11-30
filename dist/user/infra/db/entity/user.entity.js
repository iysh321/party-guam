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
exports.UserEntity = exports.MeetingTimeType = exports.MeetingWeekType = exports.MeetingType = void 0;
const typeorm_1 = require("typeorm");
const user_skill_entity_1 = require("./user-skill.entity");
const experience_entity_1 = require("./experience.entity");
const party_user_entity_1 = require("../../../../party/infra/db/entity/party/party-user.entity");
const follow_entity_1 = require("./follow.entity");
const party_request_entity_1 = require("../../../../party/infra/db/entity/apply/party-request.entity");
const party_invite_entity_1 = require("../../../../party/infra/db/entity/apply/party-invite.entity");
const baseEntity_1 = require("../../../../common/entity/baseEntity");
const auth_entity_1 = require("../../../../auth/entity/auth.entity");
var MeetingType;
(function (MeetingType) {
    MeetingType["ANY"] = "\uC0C1\uAD00\uC5C6\uC74C";
    MeetingType["ONLINE"] = "\uC628\uB77C\uC778";
    MeetingType["OFFLINE"] = "\uC624\uD504\uB77C\uC778";
})(MeetingType || (exports.MeetingType = MeetingType = {}));
var MeetingWeekType;
(function (MeetingWeekType) {
    MeetingWeekType["ANY"] = "\uC0C1\uAD00\uC5C6\uC74C";
    MeetingWeekType["WEEKDAY"] = "\uC8FC\uC911";
    MeetingWeekType["WEEKEND"] = "\uC8FC\uB9D0";
})(MeetingWeekType || (exports.MeetingWeekType = MeetingWeekType = {}));
var MeetingTimeType;
(function (MeetingTimeType) {
    MeetingTimeType["ANY"] = "\uC0C1\uAD00\uC5C6\uC74C";
    MeetingTimeType["AM"] = "\uC624\uC804";
    MeetingTimeType["PM"] = "\uC624\uD6C4";
})(MeetingTimeType || (exports.MeetingTimeType = MeetingTimeType = {}));
let UserEntity = class UserEntity extends baseEntity_1.BaseEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { nullable: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isParty", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MeetingType,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "meetingType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MeetingWeekType,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "meetingWeek", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MeetingTimeType,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "meetingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 4 }),
    __metadata("design:type", String)
], UserEntity.prototype, "mbti", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserEntity.prototype, "hp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserEntity.prototype, "mp", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => auth_entity_1.AuthEntity, (auth) => auth.user),
    __metadata("design:type", auth_entity_1.AuthEntity)
], UserEntity.prototype, "auth", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => follow_entity_1.FollowEntity, (follow) => follow.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "follows", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_user_entity_1.PartyUserEntity, (party) => party.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "parties", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_skill_entity_1.UserSkillEntity, (userSkill) => userSkill.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "userSkills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => experience_entity_1.ExperienceEntity, (userExperience) => userExperience.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "userExperiences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_request_entity_1.PartyRequestEntity, (userExperience) => userExperience.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "partyRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => party_invite_entity_1.PartyInviteEntity, (userExperience) => userExperience.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "partyInvites", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map
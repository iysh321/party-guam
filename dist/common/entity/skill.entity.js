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
exports.SkillEntity = void 0;
const user_skill_entity_1 = require("../../user/infra/db/entity/user-skill.entity");
const typeorm_1 = require("typeorm");
let SkillEntity = class SkillEntity {
};
exports.SkillEntity = SkillEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SkillEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SkillEntity.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_skill_entity_1.UserSkillEntity, (userSkill) => userSkill.skill),
    __metadata("design:type", Array)
], SkillEntity.prototype, "userSkills", void 0);
exports.SkillEntity = SkillEntity = __decorate([
    (0, typeorm_1.Entity)('skill')
], SkillEntity);
//# sourceMappingURL=skill.entity.js.map
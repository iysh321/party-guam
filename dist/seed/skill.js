"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_entity_1 = require("../skill/entity/skill.entity");
class CreateSkills {
    async run(factory, dataSource) {
        await dataSource
            .createQueryBuilder()
            .insert()
            .into(skill_entity_1.SkillEntity)
            .values([
            { skill: 'node.js' },
            { skill: 'nestjs' },
        ])
            .execute();
    }
}
exports.default = CreateSkills;
//# sourceMappingURL=skill.js.map
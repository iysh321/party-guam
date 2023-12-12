"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_entity_1 = require("../../skill/entity/skill.entity");
class SkillSeeder {
    async run(dataSource) {
        const repository = dataSource.getRepository(skill_entity_1.SkillEntity);
        await repository.insert([
            {
                id: 1,
                skill: 'react',
            },
            {
                id: 2,
                skill: 'vue.js',
            },
            {
                id: 3,
                skill: 'node.js',
            },
            {
                id: 4,
                skill: 'nest.js',
            },
        ]);
    }
}
exports.default = SkillSeeder;
//# sourceMappingURL=skill.js.map
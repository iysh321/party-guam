"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_entity_1 = require("../../position/entity/position.entity");
class PositionSeeder {
    async run(dataSource) {
        const repository = dataSource.getRepository(position_entity_1.PositionEntity);
        await repository.insert([
            {
                id: 1,
                position: '프론트엔드',
            },
            {
                id: 2,
                position: '백엔드',
            },
            {
                id: 3,
                position: '안드로이드',
            },
            {
                id: 4,
                position: 'iOS',
            },
        ]);
    }
}
exports.default = PositionSeeder;
//# sourceMappingURL=position.js.map
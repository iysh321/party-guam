"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    synchronize: false,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
});
//# sourceMappingURL=data-source.js.map
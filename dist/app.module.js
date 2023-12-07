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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const party_module_1 = require("./party/party.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const user_module_1 = require("./user/user.module");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const core_1 = require("@nestjs/core");
const response_1 = require("./common/interceptor/response");
const skill_module_1 = require("./skill/skill.module");
const position_module_1 = require("./position/position.module");
let AppModule = class AppModule {
    constructor() { }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                migrations: [__dirname + '/**/migrations/*.js'],
                extra: {
                    decimalNumbers: true,
                },
                bigNumberStrings: false,
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                logging: process.env.MODE_ENV !== 'prod',
            }),
            user_module_1.UserModule,
            party_module_1.PartyModule,
            skill_module_1.SkillModule,
            position_module_1.PositionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_1.ResponseInterceptor,
            },
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map
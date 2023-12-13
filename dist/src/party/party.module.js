"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyModule = void 0;
const common_1 = require("@nestjs/common");
const party_controller_1 = require("./interface/party.controller");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const party_entity_1 = require("./infra/db/entity/party/party.entity");
const party_factory_1 = require("./domain/party/party.factory");
const party_repository_1 = require("./infra/db/repository/party.repository");
const create_party_handler_1 = require("./application/command/create-party.handler");
const party_user_repository_1 = require("./infra/db/repository/party-user.repository");
const get_parties_handler_1 = require("./application/query/get-parties.handler");
const get_party_handler_1 = require("./application/query/get-party.handler");
const party_user_entity_1 = require("./infra/db/entity/party/party-user.entity");
const commandHandlers = [create_party_handler_1.CreatePartyHandler];
const queryHandlers = [get_parties_handler_1.GetPartiessHandler, get_party_handler_1.GetUserHandler];
const eventHandlers = [];
const factories = [party_factory_1.PartyFactory];
const repositories = [
    { provide: 'PartyRepository', useClass: party_repository_1.PartyRepository },
    { provide: 'PartyUserRepository', useClass: party_user_repository_1.PartyUserRepository },
];
let PartyModule = class PartyModule {
};
exports.PartyModule = PartyModule;
exports.PartyModule = PartyModule = __decorate([
    (0, common_1.Module)({
        controllers: [party_controller_1.PartyController],
        providers: [...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
        imports: [cqrs_1.CqrsModule, typeorm_1.TypeOrmModule.forFeature([party_entity_1.PartyEntity, party_user_entity_1.PartyUserEntity])],
    })
], PartyModule);
//# sourceMappingURL=party.module.js.map
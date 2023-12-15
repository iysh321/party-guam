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
const update_party_handler_1 = require("./application/command/update-party.handler");
const delete_party_handler_1 = require("./application/command/delete-party.handler");
const create_comment_handler_1 = require("./application/command/create-comment.handler");
const party_comment_repository_1 = require("./infra/db/repository/party-comment.repository");
const party_like_entity_1 = require("./infra/db/entity/party/party-like.entity");
const party_comment_entity_1 = require("./infra/db/entity/party/party-comment.entity");
const party_like_repository_1 = require("./infra/db/repository/party-like.repository");
const commandHandlers = [create_party_handler_1.CreatePartyHandler, update_party_handler_1.UpdatePartyHandler, delete_party_handler_1.DeletePartyHandler, create_comment_handler_1.CreateCommentHandler];
const queryHandlers = [get_parties_handler_1.GetPartiessHandler, get_party_handler_1.GetUserHandler];
const eventHandlers = [];
const factories = [party_factory_1.PartyFactory];
const repositories = [
    { provide: 'PartyRepository', useClass: party_repository_1.PartyRepository },
    { provide: 'PartyUserRepository', useClass: party_user_repository_1.PartyUserRepository },
    { provide: 'PartyLikeRepository', useClass: party_like_repository_1.PartyLikeRepository },
    { provide: 'PartyCommentRepositor', useClass: party_comment_repository_1.PartyCommentRepository },
];
let PartyModule = class PartyModule {
};
exports.PartyModule = PartyModule;
exports.PartyModule = PartyModule = __decorate([
    (0, common_1.Module)({
        controllers: [party_controller_1.PartyController],
        providers: [...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
        imports: [cqrs_1.CqrsModule, typeorm_1.TypeOrmModule.forFeature([party_entity_1.PartyEntity, party_user_entity_1.PartyUserEntity, party_like_entity_1.PartyLikeEntity, party_comment_entity_1.PartyCommentEntity])],
    })
], PartyModule);
//# sourceMappingURL=party.module.js.map
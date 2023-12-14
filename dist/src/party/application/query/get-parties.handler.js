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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartiessHandler = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cqrs_1 = require("@nestjs/cqrs");
const get_parties_query_1 = require("./get-parties.query");
const party_entity_1 = require("../../infra/db/entity/party/party.entity");
let GetPartiessHandler = class GetPartiessHandler {
    constructor(partyRepository) {
        this.partyRepository = partyRepository;
    }
    async execute(query) {
        const { page, limit, sort, order } = query;
        const offset = (page - 1) * limit || 0;
        const parties = await this.partyRepository
            .createQueryBuilder('party')
            .limit(limit)
            .offset(offset)
            .orderBy(`party.${sort}`, order)
            .getManyAndCount();
        return parties;
    }
};
exports.GetPartiessHandler = GetPartiessHandler;
exports.GetPartiessHandler = GetPartiessHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_parties_query_1.GetPartiesQuery),
    __param(0, (0, typeorm_1.InjectRepository)(party_entity_1.PartyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetPartiessHandler);
//# sourceMappingURL=get-parties.handler.js.map
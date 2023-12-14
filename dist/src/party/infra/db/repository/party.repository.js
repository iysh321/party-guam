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
exports.PartyRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const party_entity_1 = require("../entity/party/party.entity");
const party_factory_1 = require("../../../domain/party/party.factory");
const baseEntity_1 = require("../../../../common/entity/baseEntity");
let PartyRepository = class PartyRepository {
    constructor(dataSource, partyRepository, partyFactory) {
        this.dataSource = dataSource;
        this.partyRepository = partyRepository;
        this.partyFactory = partyFactory;
    }
    async create(title, content) {
        const party = await this.partyRepository.save({ title, content });
        return this.partyFactory.reconstitute(party.id, title, content);
    }
    async findOne(partyId) {
        const party = await this.partyRepository.findOne({
            where: { id: partyId },
        });
        if (!party) {
            throw new common_1.NotFoundException('파티가 존재하지 않습니다');
        }
        return this.partyFactory.reconstitute(party.id, party.title, party.content);
    }
    async update(partyId, title, content) {
        const party = await this.findOne(partyId);
        await this.partyRepository.save({ ...party, title, content });
    }
    async delete(partyId) {
        const party = await this.findOne(partyId);
        const status = baseEntity_1.StatusType.DELETED;
        await this.partyRepository.save({ ...party, status });
    }
};
exports.PartyRepository = PartyRepository;
exports.PartyRepository = PartyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(party_entity_1.PartyEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        party_factory_1.PartyFactory])
], PartyRepository);
//# sourceMappingURL=party.repository.js.map
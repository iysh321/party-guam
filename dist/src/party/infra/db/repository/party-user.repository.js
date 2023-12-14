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
exports.PartyUserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const party_user_entity_1 = require("../entity/party/party-user.entity");
let PartyUserRepository = class PartyUserRepository {
    constructor(dataSource, partyUserRepository) {
        this.dataSource = dataSource;
        this.partyUserRepository = partyUserRepository;
    }
    async createUser(userId, partyId, positionId) {
        await this.partyUserRepository.save({ userId, partyId, positionId });
    }
    async createMaster(userId, partyId, positionId) {
        const permission = party_user_entity_1.Permission.MASTER;
        await this.partyUserRepository.save({ userId, partyId, positionId, permission });
    }
    async createEditor(userId, partyId, positionId) {
        const permission = party_user_entity_1.Permission.EDITOR;
        await this.partyUserRepository.save({ userId, partyId, positionId, permission });
    }
    async findOne(userId, partyId) {
        return await this.partyUserRepository.findOne({ where: { userId, partyId } });
    }
};
exports.PartyUserRepository = PartyUserRepository;
exports.PartyUserRepository = PartyUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(party_user_entity_1.PartyUserEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository])
], PartyUserRepository);
//# sourceMappingURL=party-user.repository.js.map
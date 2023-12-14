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
exports.DeletePartyLikeHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const delete_party_like_comand_1 = require("./delete-party-like.comand");
const party_factory_1 = require("../../domain/party/party.factory");
let DeletePartyLikeHandler = class DeletePartyLikeHandler {
    constructor(partyFactory, partyRepository, partyLikeRepository) {
        this.partyFactory = partyFactory;
        this.partyRepository = partyRepository;
        this.partyLikeRepository = partyLikeRepository;
    }
    async execute(command) {
        const { userId, partyId } = command;
        const party = await this.partyRepository.findOne(partyId);
        if (!party) {
            throw new common_1.NotFoundException('파티가 존재하지 않습니다.');
        }
        const result = await this.partyLikeRepository.delete(userId, partyId);
        if (!result) {
            throw new common_1.InternalServerErrorException('삭제되지 않았습니다.');
        }
    }
};
exports.DeletePartyLikeHandler = DeletePartyLikeHandler;
exports.DeletePartyLikeHandler = DeletePartyLikeHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(delete_party_like_comand_1.DeletePartyLikeCommand),
    __param(1, (0, common_1.Inject)('PartyRepository')),
    __param(2, (0, common_1.Inject)('PartyUserRepository')),
    __metadata("design:paramtypes", [party_factory_1.PartyFactory, Object, Object])
], DeletePartyLikeHandler);
//# sourceMappingURL=delete-party-like.handler.js.map
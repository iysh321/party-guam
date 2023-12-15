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
exports.CreateCommentHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_comment_comand_1 = require("./create-comment.comand");
const party_factory_1 = require("../../domain/party/party.factory");
let CreateCommentHandler = class CreateCommentHandler {
    constructor(partyFactory, partyCommentRepository) {
        this.partyFactory = partyFactory;
        this.partyCommentRepository = partyCommentRepository;
    }
    async execute(command) {
        const { userId, partyId, comment } = command;
        const party = await this.partyCommentRepository.create(userId, partyId, comment);
        return party;
    }
};
exports.CreateCommentHandler = CreateCommentHandler;
exports.CreateCommentHandler = CreateCommentHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(create_comment_comand_1.CreateCommentCommand),
    __param(1, (0, common_1.Inject)('PartyCommentRepository')),
    __metadata("design:paramtypes", [party_factory_1.PartyFactory, Object])
], CreateCommentHandler);
//# sourceMappingURL=create-comment.handler.js.map
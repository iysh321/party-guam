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
exports.PartyController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const create_party_request_dto_1 = require("./dto/create-party.request.dto");
const update_party_request_dto_1 = require("./dto/update-party.request.dto");
const create_party_comand_1 = require("../application/command/create-party.comand");
const jwt_guard_1 = require("../../common/guard/jwt.guard");
const party_request_dto_1 = require("./dto/party.request.dto");
const party_comment_request_dto_1 = require("./dto/party-comment.request.dto");
let PartyController = class PartyController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createParty(dto) {
        const { title, content } = dto;
        const command = new create_party_comand_1.CreatePartyCommand(title, content);
        return this.commandBus.execute(command);
    }
    async updateParty(dto) {
        dto;
    }
    async deleteParty(dto) {
        dto;
    }
    async createPartyToLike(partyId) {
        partyId;
    }
    async deletePartyToLike(partyId) {
        partyId;
    }
    async createPartyComment(partyId, dto) {
        dto;
    }
    async updatePartyComment(commentId, dto) {
        dto;
    }
    async deletePartyComment(commentId, dto) {
        dto;
    }
    async sendPartyRequest(commentId) {
        commentId;
    }
    async sendPartyInvite(commentId, nickname, dto) {
        dto;
    }
    async transferPartyLeadership(commentId, dto) {
        dto;
    }
};
exports.PartyController = PartyController;
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 생성' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_party_request_dto_1.CreatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "createParty", null);
__decorate([
    (0, common_1.Put)(''),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 수정' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_party_request_dto_1.UpdatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "updateParty", null);
__decorate([
    (0, common_1.Delete)(''),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 삭제' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deleteParty", null);
__decorate([
    (0, common_1.Post)('like/:partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 좋아요' }),
    __param(0, (0, common_1.Param)('partyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "createPartyToLike", null);
__decorate([
    (0, common_1.Delete)('like/:partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 좋아요 취소' }),
    __param(0, (0, common_1.Param)('partyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deletePartyToLike", null);
__decorate([
    (0, common_1.Post)(':partyId/comments'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 댓글 생성' }),
    __param(0, (0, common_1.Param)('partyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, party_comment_request_dto_1.PartyCommentRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "createPartyComment", null);
__decorate([
    (0, common_1.Put)('comments/:commentId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 댓글 수정' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, party_comment_request_dto_1.PartyCommentRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "updatePartyComment", null);
__decorate([
    (0, common_1.Delete)('comments/:commentId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 댓글 삭제' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_party_request_dto_1.UpdatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deletePartyComment", null);
__decorate([
    (0, common_1.Post)(':partyId/request'),
    (0, swagger_1.ApiOperation)({ summary: '파티 신청' }),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "sendPartyRequest", null);
__decorate([
    (0, common_1.Post)(':partyId/invite/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '파티 초대' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Param)('nickname')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, party_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "sendPartyInvite", null);
__decorate([
    (0, common_1.Post)(':partyId/transfer'),
    (0, swagger_1.ApiOperation)({ summary: '파티장 위임' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_party_request_dto_1.CreatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "transferPartyLeadership", null);
exports.PartyController = PartyController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.AccessJwtAuthGuard),
    (0, common_1.Controller)('parties'),
    (0, swagger_1.ApiTags)('parties'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], PartyController);
//# sourceMappingURL=party.controller.js.map
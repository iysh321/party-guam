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
const class_transformer_1 = require("class-transformer");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const jwt_guard_1 = require("../../common/guard/jwt.guard");
const create_party_comand_1 = require("../application/command/create-party.comand");
const get_parties_query_1 = require("../application/query/get-parties.query");
const get_party_query_1 = require("../application/query/get-party.query");
const party_param_request_dto_1 = require("./dto/request/party.param.request.dto");
const party_comment_request_dto_1 = require("./dto/request/party-comment.request.dto");
const create_party_request_dto_1 = require("./dto/request/create-party.request.dto");
const update_party_request_dto_1 = require("./dto/request/update-party.request.dto");
const party_query_request_dto_1 = require("./dto/request/party.query.request.dto");
const party_response_dto_1 = require("./dto/response/party.response.dto");
let PartyController = class PartyController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getParty(param) {
        const party = new get_party_query_1.GetPartyQuery(param.partyId);
        const result = this.queryBus.execute(party);
        return (0, class_transformer_1.plainToInstance)(party_response_dto_1.PartyResponseDto, result);
    }
    async getParties(query) {
        const { page, limit, sort, order } = query;
        const parties = new get_parties_query_1.GetPartiesQuery(page, limit, sort, order);
        const result = this.queryBus.execute(parties);
        return (0, class_transformer_1.plainToInstance)(party_response_dto_1.PartyResponseDto, result);
    }
    async createParty(payload, dto) {
        const { title, content, positionId } = dto;
        const command = new create_party_comand_1.CreatePartyCommand(payload.id, title, content, positionId);
        return this.commandBus.execute(command);
    }
    async updateParty(param, dto) {
        dto;
    }
    async deleteParty(param, dto) {
        dto;
    }
    async getlikes(param) {
        param.partyId;
    }
    async createPartyToLike(param) {
        param.partyId;
    }
    async deletePartyToLike(param) {
        param.partyId;
    }
    async createPartyComment(param, dto) {
        dto;
    }
    async updatePartyComment(commentId, dto) {
        dto;
    }
    async deletePartyComment(commentId, dto) {
        dto;
    }
    async getPartyRequestList(partyId, dto) {
        dto;
    }
    async sendPartyRequest(commentId) {
        commentId;
    }
    async deletePartyRequest(commentId) {
        commentId;
    }
    async getPartyInviteList(partyId, dto) {
        dto;
    }
    async sendPartyInvite(commentId, nickname, dto) {
        dto;
    }
    async deletePartyInvite(commentId, nickname, dto) {
        dto;
    }
    async transferPartyLeadership(commentId, dto) {
        dto;
    }
};
exports.PartyController = PartyController;
__decorate([
    (0, common_1.Get)(':partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 조회' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getParty", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 목록 조회' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_query_request_dto_1.PartyQueryRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getParties", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 생성' }),
    __param(0, (0, auth_decorator_1.CurrentAccount)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_party_request_dto_1.CreatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "createParty", null);
__decorate([
    (0, common_1.Put)(':partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 수정' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto, update_party_request_dto_1.UpdatePartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "updateParty", null);
__decorate([
    (0, common_1.Delete)(':partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 종료(소프트 삭제)' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto, party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deleteParty", null);
__decorate([
    (0, common_1.Get)(':partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 좋아요 목록 조회' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getlikes", null);
__decorate([
    (0, common_1.Post)('like/:partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 좋아요' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "createPartyToLike", null);
__decorate([
    (0, common_1.Delete)('like/:partyId'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 좋아요 취소' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deletePartyToLike", null);
__decorate([
    (0, common_1.Post)(':partyId/comments'),
    (0, swagger_1.ApiOperation)({ summary: '파티(게시물) 댓글 생성' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_param_request_dto_1.PartyRequestDto, party_comment_request_dto_1.PartyCommentRequestDto]),
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
    (0, common_1.Get)(':partyId/request'),
    (0, swagger_1.ApiOperation)({ summary: '파티 신청 조회' }),
    __param(0, (0, common_1.Param)('partyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, party_comment_request_dto_1.PartyCommentRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getPartyRequestList", null);
__decorate([
    (0, common_1.Post)(':partyId/request'),
    (0, swagger_1.ApiOperation)({ summary: '파티 신청' }),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "sendPartyRequest", null);
__decorate([
    (0, common_1.Post)(':partyId/request'),
    (0, swagger_1.ApiOperation)({ summary: '파티 신청 취소' }),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deletePartyRequest", null);
__decorate([
    (0, common_1.Get)(':partyId/invite'),
    (0, swagger_1.ApiOperation)({ summary: '파티 초대 조회' }),
    __param(0, (0, common_1.Param)('partyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, party_comment_request_dto_1.PartyCommentRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getPartyInviteList", null);
__decorate([
    (0, common_1.Post)(':partyId/invite/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '파티 초대' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Param)('nickname')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "sendPartyInvite", null);
__decorate([
    (0, common_1.Delete)(':partyId/invite/:nickname'),
    (0, swagger_1.ApiOperation)({ summary: '파티 초대 취소' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Param)('nickname')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, party_param_request_dto_1.PartyRequestDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "deletePartyInvite", null);
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
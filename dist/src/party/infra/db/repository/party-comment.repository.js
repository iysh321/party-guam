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
exports.PartyCommentRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const party_comment_entity_1 = require("../entity/party/party-comment.entity");
let PartyCommentRepository = class PartyCommentRepository {
    constructor(dataSource, partyCommentRepository) {
        this.dataSource = dataSource;
        this.partyCommentRepository = partyCommentRepository;
    }
    async create(userId, partyId, comment) {
        await this.partyCommentRepository.save({ userId, partyId, comment });
    }
    async update(commentId, userId, comment) {
        const findComment = await this.findOne(commentId, userId);
        await this.partyCommentRepository.save({ ...findComment, comment });
    }
    async delete(commentId, userId) {
        const result = await this.partyCommentRepository.delete({ userId, id: commentId });
        return result.affected ? true : false;
    }
    async findOne(commentId, userId) {
        const result = await this.partyCommentRepository.findOne({
            where: { id: commentId, userId },
        });
        if (!result) {
            throw new common_1.NotFoundException('댓글이 존재하지 않습니다');
        }
        return result;
    }
};
exports.PartyCommentRepository = PartyCommentRepository;
exports.PartyCommentRepository = PartyCommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(party_comment_entity_1.PartyCommentEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository])
], PartyCommentRepository);
//# sourceMappingURL=party-comment.repository.js.map
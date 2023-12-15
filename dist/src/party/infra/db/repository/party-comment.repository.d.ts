import { DataSource, Repository } from 'typeorm';
import { IPartyCommentRepository } from 'src/party/domain/party/repository/iPartyComment.repository';
import { PartyCommentEntity } from '../entity/party/party-comment.entity';
export declare class PartyCommentRepository implements IPartyCommentRepository {
    readonly dataSource: DataSource;
    private partyCommentRepository;
    constructor(dataSource: DataSource, partyCommentRepository: Repository<PartyCommentEntity>);
    create(userId: number, partyId: number, comment: string): Promise<void>;
    update(commentId: number, userId: number, comment: string): Promise<void>;
    delete(commentId: number, userId: number): Promise<boolean>;
    findOne(commentId: number, userId: number): Promise<PartyCommentEntity>;
}

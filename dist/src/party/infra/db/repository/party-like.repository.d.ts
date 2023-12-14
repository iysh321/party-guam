import { DataSource, Repository } from 'typeorm';
import { IPartyLikeRepository } from 'src/party/domain/party/repository/iPartyLike.repository';
import { PartyLikeEntity } from '../entity/party/party-like.entity';
export declare class PartyLikeRepository implements IPartyLikeRepository {
    readonly dataSource: DataSource;
    private partyLikeRepository;
    constructor(dataSource: DataSource, partyLikeRepository: Repository<PartyLikeEntity>);
    create(userId: number, partyId: number): Promise<void>;
    delete(userId: number, partyId: number): Promise<boolean>;
}

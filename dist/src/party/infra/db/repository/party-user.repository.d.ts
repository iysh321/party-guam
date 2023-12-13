import { DataSource, Repository } from 'typeorm';
import { PartyUserEntity } from '../entity/party/party-user.entity';
import { IPartyUserRepository } from 'src/party/domain/party/repository/iPartyUser.repository';
export declare class PartyUserRepository implements IPartyUserRepository {
    readonly dataSource: DataSource;
    private partyUserRepository;
    constructor(dataSource: DataSource, partyUserRepository: Repository<PartyUserEntity>);
    create(userId: number, partyId: number, positionId: number): Promise<void>;
}

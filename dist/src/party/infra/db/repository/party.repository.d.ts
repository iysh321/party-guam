import { DataSource, Repository } from 'typeorm';
import { IPartyRepository } from 'src/party/domain/party/repository/iParty.repository';
import { PartyEntity } from '../entity/party/party.entity';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { Party } from 'src/party/domain/party/party';
export declare class PartyRepository implements IPartyRepository {
    readonly dataSource: DataSource;
    private partyRepository;
    private partyFactory;
    constructor(dataSource: DataSource, partyRepository: Repository<PartyEntity>, partyFactory: PartyFactory);
    create(userId: number, title: string, contents: string): Promise<Party>;
}

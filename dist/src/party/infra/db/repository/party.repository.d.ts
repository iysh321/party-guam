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
    create(title: string, content: string): Promise<Party>;
    findOne(partyId: number): Promise<Party>;
    update(partyId: number, title: string, content: string): Promise<void>;
    delete(partyId: number): Promise<void>;
}

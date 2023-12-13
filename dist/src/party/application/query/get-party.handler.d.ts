import { IQueryHandler } from '@nestjs/cqrs';
import { PartyEntity } from 'src/party/infra/db/entity/party/party.entity';
import { Repository } from 'typeorm';
import { GetPartyQuery } from './get-party.query';
export declare class GetUserHandler implements IQueryHandler<GetPartyQuery> {
    private partyRepository;
    constructor(partyRepository: Repository<PartyEntity>);
    execute(query: GetPartyQuery): Promise<PartyEntity>;
}

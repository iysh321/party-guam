import { Repository } from 'typeorm';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetPartiesQuery } from './get-parties.query';
import { PartyEntity } from 'src/party/infra/db/entity/party/party.entity';
export declare class GetPartiessHandler implements IQueryHandler<GetPartiesQuery> {
    private partyRepository;
    constructor(partyRepository: Repository<PartyEntity>);
    execute(query: GetPartiesQuery): Promise<[PartyEntity[], number]>;
}

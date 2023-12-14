import { Repository } from 'typeorm';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetPartiesQuery } from './get-parties.query';
import { PartyLikeEntity } from 'src/party/infra/db/entity/party/party-like.entity';
import { GetPartyLikeQuery } from './get-party-like.query';
export declare class GetPartiessHandler implements IQueryHandler<GetPartiesQuery> {
    private partyLikeRepository;
    constructor(partyLikeRepository: Repository<PartyLikeEntity>);
    execute(query: GetPartyLikeQuery): Promise<[PartyLikeEntity[], number]>;
}

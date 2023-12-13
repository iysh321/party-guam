import { PartyEntity } from './party.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class PartyLike {
    id: number;
    partyId: number;
    user: UserEntity;
    party: PartyEntity;
}

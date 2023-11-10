import { PartyEntity } from './party.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class PartyLike {
    id: number;
    party_post_id: number;
    user: UserEntity;
    party: PartyEntity;
}

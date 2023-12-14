import { PartyEntity } from './party.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class PartyLikeEntity {
    id: number;
    userId: number;
    partyId: number;
    createdAt: Date;
    user: UserEntity;
    party: PartyEntity;
}

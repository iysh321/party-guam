import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from './party.entity';
export declare class PartyUserEntity {
    id: number;
    user: UserEntity;
    party: PartyEntity;
}

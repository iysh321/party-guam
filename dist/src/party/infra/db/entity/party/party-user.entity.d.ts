import { PositionEntity } from 'src/position/entity/position.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from './party.entity';
export declare enum Permission {
    MASTER = "master",
    EDITOR = "editor"
}
export declare class PartyUserEntity {
    id: number;
    userId: number;
    partyId: number;
    positionId: number;
    permission: string;
    user: UserEntity;
    party: PartyEntity;
    position: PositionEntity;
}

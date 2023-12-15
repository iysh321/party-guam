import { BaseEntity } from 'src/common/entity/baseEntity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from './party.entity';
export declare class PartyCommentEntity extends BaseEntity {
    id: number;
    userId: number;
    partyId: number;
    content: string;
    user: UserEntity;
    party: PartyEntity;
}

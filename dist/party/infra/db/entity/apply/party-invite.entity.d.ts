import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from '../party/party.entity';
export declare class PartyInviteEntity {
    id: number;
    message: string;
    created_at: Date;
    status: string;
    user: UserEntity;
    party: PartyEntity;
}

import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from '../post/party.entity';
export declare class PartyProposalEntity {
    id: number;
    message: string;
    created_at: Date;
    status: string;
    user: UserEntity;
    party: PartyEntity;
}

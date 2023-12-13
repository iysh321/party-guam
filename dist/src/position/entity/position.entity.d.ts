import { PartyUserEntity } from 'src/party/infra/db/entity/party/party-user.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class PositionEntity {
    id: number;
    position: string;
    partyUsers: PartyUserEntity[];
    users: UserEntity;
}

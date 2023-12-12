import { PartyUserEntity } from 'src/party/infra/db/entity/party/party-user.entity';
export declare class PositionEntity {
    id: number;
    position: string;
    partyUsers: PartyUserEntity[];
}

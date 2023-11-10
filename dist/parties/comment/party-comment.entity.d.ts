import { PartyEntity } from '../post/party.entity';
export declare class PartyCommentEntity {
    id: number;
    party: PartyEntity;
    content: string;
    created_at: Date;
    updated_at: Date;
}

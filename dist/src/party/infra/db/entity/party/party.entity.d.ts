import { PartyUserEntity } from './party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyInviteEntity } from '../apply/party-invite.entity';
import { PartyRequestEntity } from '../apply/party-request.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class PartyEntity extends BaseEntity {
    id: number;
    party_status: string;
    project_status: string;
    title: string;
    content: string;
    partyUser: PartyUserEntity[];
    partyLikes: PartyLike[];
    comments: PartyCommentEntity[];
    partyRequests: PartyRequestEntity[];
    partyInvites: PartyInviteEntity[];
}
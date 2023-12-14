import { PartyUserEntity } from './party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLikeEntity } from './party-like.entity';
import { PartyInviteEntity } from '../apply/party-invite.entity';
import { PartyRequestEntity } from '../apply/party-request.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class PartyEntity extends BaseEntity {
    id: number;
    partyStatus: string;
    projectStatus: string;
    title: string;
    content: string;
    partyUser: PartyUserEntity[];
    partyLikes: PartyLikeEntity[];
    comments: PartyCommentEntity[];
    partyRequests: PartyRequestEntity[];
    partyInvites: PartyInviteEntity[];
}

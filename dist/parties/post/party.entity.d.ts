import { PartyUserEntity } from '../party/party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyRecruitmentEntity } from '../apply/party-recruitment.entity';
import { PartyProposalEntity } from '../apply/party-proposal.entity';
export declare class PartyEntity {
    id: number;
    party_status: string;
    project_status: string;
    title: string;
    content: string;
    status: string;
    partyUser: PartyUserEntity[];
    partyLikes: PartyLike[];
    comments: PartyCommentEntity[];
    partyProposals: PartyProposalEntity[];
    partyRecruitments: PartyRecruitmentEntity[];
}

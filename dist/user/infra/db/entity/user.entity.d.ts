import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { PartyUserEntity } from 'src/party/infra/db/entity/party/party-user.entity';
import { FollowEntity } from 'src/user/infra/db/entity/follow.entity';
import { PartyRequestEntity } from 'src/party/infra/db/entity/apply/party-request.entity';
import { PartyInviteEntity } from 'src/party/infra/db/entity/apply/party-invite.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { AuthEntity } from 'src/auth/entity/auth.entity';
export declare enum MeetingType {
    ANY = "\uC0C1\uAD00\uC5C6\uC74C",
    ONLINE = "\uC628\uB77C\uC778",
    OFFLINE = "\uC624\uD504\uB77C\uC778"
}
export declare enum MeetingWeekType {
    ANY = "\uC0C1\uAD00\uC5C6\uC74C",
    WEEKDAY = "\uC8FC\uC911",
    WEEKEND = "\uC8FC\uB9D0"
}
export declare enum MeetingTimeType {
    ANY = "\uC0C1\uAD00\uC5C6\uC74C",
    AM = "\uC624\uC804",
    PM = "\uC624\uD6C4"
}
export declare class UserEntity extends BaseEntity {
    id: number;
    account: string;
    nickname: string;
    email: string;
    image: string;
    isParty: boolean;
    meetingType: MeetingType;
    meetingWeek: MeetingWeekType;
    meetingTime: MeetingTimeType;
    mbti: string;
    hp: number;
    mp: number;
    auth: AuthEntity;
    follows: FollowEntity[];
    parties: PartyUserEntity[];
    userSkills: UserSkillEntity[];
    userExperiences: ExperienceEntity[];
    partyRequests: PartyRequestEntity[];
    partyInvites: PartyInviteEntity[];
}

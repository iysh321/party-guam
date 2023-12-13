import { UserSkillEntity } from 'src/user/infra/db/entity/user-skill.entity';
import { MeetingTimeType, MeetingType, MeetingWeekType } from 'src/user/infra/db/entity/user.entity';
export declare class User {
    id: number;
    account: string;
    nickname: string;
    email: string;
    image: string | null;
    isParty: boolean | null;
    meetingType: MeetingType | null;
    meetingWeek: MeetingWeekType | null;
    meetingTime: MeetingTimeType | null;
    mbti: string | null;
    hp: number | null;
    mp: number | null;
    userSkills: UserSkillEntity[];
    constructor(id: number, account: string, nickname: string, email: string, image?: string | null, isParty?: boolean | null, meetingType?: MeetingType | null, meetingWeek?: MeetingWeekType | null, meetingTime?: MeetingTimeType | null, mbti?: string | null, hp?: number | null, mp?: number | null, userSkills?: UserSkillEntity[]);
    getId(): Readonly<number>;
}
export declare class UserSkill {
    id: number;
    level: number;
    constructor(id: number, level: number);
    getId(): Readonly<number>;
}

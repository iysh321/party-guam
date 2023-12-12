import { UserSkillEntity } from 'src/user/infra/db/entity/user-skill.entity';
export declare class SkillEntity {
    id: number;
    skill: string;
    userSkills: UserSkillEntity[];
}

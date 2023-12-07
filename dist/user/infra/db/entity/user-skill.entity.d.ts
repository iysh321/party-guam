import { UserEntity } from './user.entity';
import { SkillEntity } from 'src/skill/entity/skill.entity';
export declare class UserSkillEntity {
    id: number;
    level: number;
    user: UserEntity;
    skill: SkillEntity;
}

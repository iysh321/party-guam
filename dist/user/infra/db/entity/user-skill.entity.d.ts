import { UserEntity } from './user.entity';
import { SkillEntity } from 'src/common/entity/skill.entity';
export declare class UserSkillEntity {
    id: number;
    level: number;
    user: UserEntity;
    skill: SkillEntity;
}

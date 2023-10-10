import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { SkillEntity } from 'src/common/skill.entity';

@Entity('user_skill')
export class UserSkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.userSkills)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => SkillEntity, (skill) => skill.userSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: SkillEntity;
}

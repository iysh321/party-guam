import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { Skill } from 'src/common/skill.entity';

@Entity()
export class UserSkill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;

  @ManyToOne(() => UserEntity, (user) => user.userSkills)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => Skill, (skill) => skill.userSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: Skill;
}

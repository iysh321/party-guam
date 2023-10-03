import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Skill } from 'src/common/skill.entity';

@Entity()
export class UserSkill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;

  @ManyToOne(() => User, (user) => user.userSkills)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Skill, (skill) => skill.userSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: Skill;
}

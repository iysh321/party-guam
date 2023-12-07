import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { SkillEntity } from 'src/skill/entity/skill.entity';

@Entity('user_skill')
export class UserSkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: number;

  @ManyToOne(() => UserEntity, (user) => user.userSkills)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => SkillEntity, (skill) => skill.userSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: SkillEntity;
}

import { UserSkill } from 'src/users/user/infra/db/entity/user-skill.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  skill_id: number;

  @Column()
  skill: string;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.skill)
  userSkills: UserSkill[];
}

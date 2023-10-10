import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { PartyUserEntity } from 'src/parties/party/party-user.entity';
import { FollowEntity } from 'src/users/follow/infra/db/entity/follow.entity';
import { PartyProposalEntity } from 'src/parties/apply/party-proposal.entity';
import { PartyRecruitmentEntity } from 'src/parties/apply/party-recruitment.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  account: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ length: 15 })
  nickname: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  is_party: boolean;

  @Column({ nullable: true })
  is_online: boolean;

  @Column({ nullable: true, type: 'json' })
  meeting_time: any;

  @Column({ nullable: true, length: 4 })
  mbti: string;

  @Column({ nullable: true })
  hp: number;

  @Column({ nullable: true })
  mp: number;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column()
  status: string;

  @OneToMany(() => FollowEntity, (follow) => follow.user)
  follows: FollowEntity[];

  @OneToMany(() => PartyUserEntity, (party) => party.user)
  parties: PartyUserEntity[];

  @OneToMany(() => UserSkillEntity, (userSkill) => userSkill.user)
  userSkills: UserSkillEntity[];

  @OneToMany(() => ExperienceEntity, (userExperience) => userExperience.user)
  userExperiences: ExperienceEntity[];

  @OneToMany(() => PartyProposalEntity, (userExperience) => userExperience.user)
  partyProposals: PartyProposalEntity[];

  @OneToMany(() => PartyRecruitmentEntity, (userExperience) => userExperience.user)
  partyRecruitments: PartyRecruitmentEntity[];
}

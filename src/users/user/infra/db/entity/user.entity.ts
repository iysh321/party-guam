import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserSkill } from './user-skill.entity';
import { UserExperience } from './user-experience.entity';
import { Party } from 'src/parties/party/party.entity';
import { UserLike } from 'src/users/like/infra/db/entity/user-like.entity';
import { Follow } from 'src/users/follow/infra/db/entity/follow.entity';
import { PartyProposal } from 'src/parties/apply/party-proposal.entity';
import { PartyRecruitment } from 'src/parties/apply/party-recruitment.entity';

@Entity()
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

  @OneToMany(() => UserLike, (userLike) => userLike.user)
  userLikes: UserLike[];

  @OneToMany(() => Follow, (follow) => follow.user)
  follows: Follow[];

  @OneToMany(() => Party, (party) => party.user)
  parties: Party[];

  @OneToMany(() => UserSkill, (userSkill) => userSkill.user)
  userSkills: UserSkill[];

  @OneToMany(() => UserExperience, (userExperience) => userExperience.user)
  userExperiences: UserExperience[];

  @OneToMany(() => PartyProposal, (userExperience) => userExperience.user)
  partyProposals: PartyProposal[];

  @OneToMany(() => PartyRecruitment, (userExperience) => userExperience.user)
  partyRecruitments: PartyRecruitment[];
}

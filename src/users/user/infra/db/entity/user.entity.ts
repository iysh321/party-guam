import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { PartyUserEntity } from 'src/parties/party/party-user.entity';
import { FollowEntity } from 'src/users/follow/infra/db/entity/follow.entity';
import { PartyProposalEntity } from 'src/parties/apply/party-proposal.entity';
import { PartyRecruitmentEntity } from 'src/parties/apply/party-recruitment.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';

export enum MeetingType {
  ANY = '상관없음',
  ONLINE = '온라인',
  OFFLINE = '오프라인',
}

export enum MeetingWeekType {
  ANY = '상관없음',
  WEEKDAY = '주중',
  WEEKEND = '주말',
}

export enum MeetingTimeType {
  ANY = '상관없음',
  AM = '오전',
  PM = '오후',
}

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  account: string;

  @Column('varchar', { length: 15, unique: true })
  nickname: string;

  @Column('varchar', { nullable: true, unique: true })
  email: string;

  @Column('varchar', { nullable: true })
  image: string;

  @Column('boolean', { nullable: true })
  is_party: boolean;

  @Column({
    type: 'enum',
    enum: MeetingType,
    default: MeetingType.ANY,
  })
  meeting_type: MeetingType;

  @Column({
    type: 'enum',
    enum: MeetingWeekType,
    default: MeetingWeekType.ANY,
  })
  meeting_week: MeetingWeekType;

  @Column({
    type: 'enum',
    enum: MeetingTimeType,
    default: MeetingTimeType.ANY,
  })
  meeting_time: MeetingTimeType;

  @Column({ nullable: true, length: 4 })
  mbti: string;

  @Column({ nullable: true })
  hp: number;

  @Column({ nullable: true })
  mp: number;

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

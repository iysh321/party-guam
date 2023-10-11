import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { PartyUserEntity } from 'src/parties/party/party-user.entity';
import { FollowEntity } from 'src/users/follow/infra/db/entity/follow.entity';
import { PartyProposalEntity } from 'src/parties/apply/party-proposal.entity';
import { PartyRecruitmentEntity } from 'src/parties/apply/party-recruitment.entity';

enum MeetingType {
  ANY = '상관없음',
  ONLINE = '온라인',
  OFFLINE = '오프라인',
}

enum MeetingWeekType {
  ANY = '상관없음',
  WEEKDAY = '주중',
  WEEKEND = '주말',
}

enum MeetingTimeType {
  ANY = '상관없음',
  AM = '오전',
  PM = '오후',
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  account: string;

  @Column({ length: 30 })
  password: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ length: 15, unique: true })
  nickname: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
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
  day_type: MeetingWeekType;

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

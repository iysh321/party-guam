import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';

import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { PartyUserEntity } from 'src/party/infra/db/entity/party/party-user.entity';
import { FollowEntity } from 'src/user/infra/db/entity/follow.entity';
import { PartyRequestEntity } from 'src/party/infra/db/entity/apply/party-request.entity';
import { PartyInviteEntity } from 'src/party/infra/db/entity/apply/party-invite.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { AuthEntity } from 'src/auth/entity/auth.entity';

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

  @Column('varchar', { nullable: false })
  email: string;

  @Column('varchar', { nullable: true })
  image: string;

  @Column('boolean', { nullable: true })
  isParty: boolean;

  @Column({
    type: 'enum',
    enum: MeetingType,
    nullable: true,
  })
  meetingType: MeetingType;

  @Column({
    type: 'enum',
    enum: MeetingWeekType,
    nullable: true,
  })
  meetingWeek: MeetingWeekType;

  @Column({
    type: 'enum',
    enum: MeetingTimeType,
    nullable: true,
  })
  meetingTime: MeetingTimeType;

  @Column({ nullable: true, length: 4 })
  mbti: string;

  @Column({ nullable: true })
  hp: number;

  @Column({ nullable: true })
  mp: number;

  @OneToOne(() => AuthEntity, (auth) => auth.user)
  auth: AuthEntity;

  @OneToMany(() => FollowEntity, (follow) => follow.follower)
  followers: FollowEntity[];

  @OneToMany(() => FollowEntity, (follow) => follow.following)
  followings: FollowEntity[];

  @OneToMany(() => PartyUserEntity, (party) => party.user)
  parties: PartyUserEntity[];

  @OneToMany(() => UserSkillEntity, (userSkill) => userSkill.user)
  userSkills: UserSkillEntity[];

  @OneToMany(() => ExperienceEntity, (userExperience) => userExperience.user)
  userExperiences: ExperienceEntity[];

  @OneToMany(() => PartyRequestEntity, (userExperience) => userExperience.user)
  partyRequests: PartyRequestEntity[];

  @OneToMany(() => PartyInviteEntity, (userExperience) => userExperience.user)
  partyInvites: PartyInviteEntity[];
}

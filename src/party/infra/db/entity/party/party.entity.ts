import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PartyUserEntity } from './party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyInviteEntity } from '../apply/party-invite.entity';
import { PartyRequestEntity } from '../apply/party-request.entity';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity('party')
export class PartyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  partyStatus: string;

  @Column({ nullable: true })
  projectStatus: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  content: string;

  @OneToMany(() => PartyUserEntity, (party) => party.party)
  partyUser: PartyUserEntity[];

  @OneToMany(() => PartyLike, (party) => party.party)
  partyLikes: PartyLike[];

  @OneToMany(() => PartyCommentEntity, (comment) => comment.party)
  comments: PartyCommentEntity[];

  @OneToMany(() => PartyRequestEntity, (comment) => comment.party)
  partyRequests: PartyRequestEntity[];

  @OneToMany(() => PartyInviteEntity, (comment) => comment.party)
  partyInvites: PartyInviteEntity[];
}

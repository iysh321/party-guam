import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PartyUserEntity } from './party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyInviteEntity } from '../apply/party-invite.entity';
import { PartyRequestEntity } from '../apply/party-request.entity';

@Entity()
export class PartyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  party_status: string;

  @Column({ nullable: true })
  project_status: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  status: string;

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

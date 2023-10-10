import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PartyUserEntity } from '../party/party-user.entity';
import { PartyCommentEntity } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyRecruitmentEntity } from '../apply/party-recruitment.entity';
import { PartyProposalEntity } from '../apply/party-proposal.entity';

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

  @OneToMany(() => PartyProposalEntity, (comment) => comment.party)
  partyProposals: PartyProposalEntity[];

  @OneToMany(() => PartyRecruitmentEntity, (comment) => comment.party)
  partyRecruitments: PartyRecruitmentEntity[];
}

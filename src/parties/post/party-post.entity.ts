import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Party } from '../party/party.entity';
import { PartyComment } from '../comment/party-comment.entity';
import { PartyLike } from './party-like.entity';
import { PartyRecruitment } from '../apply/party-recruitment.entity';
import { PartyProposal } from '../apply/party-proposal.entity';

@Entity()
export class PartyPost {
  @PrimaryGeneratedColumn()
  party_post_id: number;

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

  @OneToMany(() => Party, (party) => party.partyPost)
  party: Party[];

  @OneToMany(() => Party, (party) => party.partyPost)
  partyLikes: PartyLike[];

  @OneToMany(() => PartyComment, (comment) => comment.partyPost)
  comments: PartyComment[];

  @OneToMany(() => PartyProposal, (comment) => comment.partyPost)
  partyProposals: PartyProposal[];

  @OneToMany(() => PartyRecruitment, (comment) => comment.partyPost)
  partyRecruitments: PartyRecruitment[];
}

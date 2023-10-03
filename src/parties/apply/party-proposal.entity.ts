import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { User } from 'src/users/user/infra/db/entity/user.entity';
import { PartyPost } from '../post/party-post.entity';

@Entity()
export class PartyProposal {
  @PrimaryGeneratedColumn()
  party_proposal_id: number;

  @ManyToOne(() => User, (user) => user.partyProposals)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PartyPost, (post) => post.partyProposals)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;

  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true })
  status: string;
}

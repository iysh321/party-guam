import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { PartyEntity } from '../post/party.entity';

@Entity('party_proposal')
export class PartyProposalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true })
  status: string;

  @ManyToOne(() => UserEntity, (user) => user.partyProposals)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PartyEntity, (post) => post.partyProposals)
  @JoinColumn({ name: 'party_post_id' })
  party: PartyEntity;
}

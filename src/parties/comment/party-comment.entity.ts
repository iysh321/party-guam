import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

import { PartyEntity } from '../post/party.entity';

@Entity('party_comment')
export class PartyCommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PartyEntity, (post) => post.comments)
  @JoinColumn({ name: 'party_post_id' })
  party: PartyEntity;

  @Column()
  content: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true, type: 'date' })
  updated_at: Date;
}

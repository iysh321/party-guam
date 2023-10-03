import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PartyPost } from './party-post.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  position_id: number;

  @ManyToOne(() => PartyPost, (post) => post.positions)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;

  @Column()
  position: string;

  @Column({ default: 1 })
  total_positions: number;

  @Column()
  status: boolean;
}

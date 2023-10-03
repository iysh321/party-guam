import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { PartyCommentLike } from './party-comment-like.entity';
import { PartyPost } from '../post/party-post.entity';

@Entity()
export class PartyComment {
  @PrimaryGeneratedColumn()
  party_comment_id: number;

  @ManyToOne(() => PartyPost, (post) => post.comments)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;

  @OneToMany(() => PartyCommentLike, (partyCommentLike) => partyCommentLike.partyComment)
  partyCommentLikes: PartyCommentLike[];

  @Column()
  content: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true, type: 'date' })
  updated_at: Date;
}

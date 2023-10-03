import { User } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PartyPost } from '../post/party-post.entity';

@Entity()
export class PartyRecruitment {
  @PrimaryGeneratedColumn()
  party_recruitment_id: number;

  @ManyToOne(() => User, (user) => user.partyRecruitments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PartyPost, (post) => post.partyRecruitments)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;

  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true })
  status: string;
}

import { User } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PartyPost } from '../post/party-post.entity';

@Entity()
export class Party {
  @PrimaryGeneratedColumn()
  party_id: number;

  @ManyToOne(() => User, (user) => user.parties)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PartyPost, (post) => post.party)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;
}

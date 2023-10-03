import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PartyPost } from './party-post.entity';
import { User } from 'src/users/user/infra/db/entity/user.entity';

@Entity()
export class PartyLike {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  party_post_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PartyPost, (post) => post.partyLikes)
  @JoinColumn({ name: 'party_post_id' })
  partyPost: PartyPost;
}

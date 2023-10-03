import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PartyComment } from './party-comment.entity';
import { User } from 'src/users/user/infra/db/entity/user.entity';

@Entity()
export class PartyCommentLike {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  party_comment_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PartyComment, (partyComment) => partyComment.partyCommentLikes)
  @JoinColumn({ name: 'party_comment_id' })
  partyComment: PartyComment;
}

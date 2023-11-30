import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PartyEntity } from './party.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';

@Entity()
export class PartyLike {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  party_post_id: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PartyEntity, (post) => post.partyLikes)
  @JoinColumn({ name: 'party_post_id' })
  party: PartyEntity;
}

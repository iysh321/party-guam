import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PartyEntity } from './party.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';

@Entity('party_like')
export class PartyLike {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  partyId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @ManyToOne(() => PartyEntity, (post) => post.partyLikes)
  @JoinColumn({ name: 'party_id', referencedColumnName: 'id' })
  party: PartyEntity;
}

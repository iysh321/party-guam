import { UserEntity } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PartyEntity } from '../post/party.entity';

@Entity()
export class PartyUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.parties)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PartyEntity, (post) => post.partyUser)
  @JoinColumn({ name: 'party_post_id' })
  party: PartyEntity;
}
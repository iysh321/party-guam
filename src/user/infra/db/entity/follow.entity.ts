import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('follow')
export class FollowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.follows)
  @JoinColumn({ name: 'follwer_id' })
  user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.follows)
  @JoinColumn({ name: 'following_id' })
  following: UserEntity;
}
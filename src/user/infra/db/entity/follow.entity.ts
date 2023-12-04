import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index, Column } from 'typeorm';

@Entity('follow')
@Index('unique_follower_following', ['followerId', 'followingId'], { unique: true })
export class FollowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followingId: number;

  @ManyToOne(() => UserEntity, (user) => user.followers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'follower_id', referencedColumnName: 'id' })
  follower: UserEntity;

  @ManyToOne(() => UserEntity, (users) => users.followings, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'following_id', referencedColumnName: 'id' })
  following: UserEntity;
}

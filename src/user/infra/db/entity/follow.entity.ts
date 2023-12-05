import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Entity, ManyToOne, JoinColumn, Index, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('follow')
@Index('unique_follower_following', ['userId', 'followId'], { unique: true })
export class FollowEntity {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  followId: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.followers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  follower: UserEntity;

  @ManyToOne(() => UserEntity, (users) => users.followings, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'follow_id', referencedColumnName: 'id' })
  following: UserEntity;
}

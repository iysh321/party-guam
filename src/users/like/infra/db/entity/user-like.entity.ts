import { User } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class UserLike {
  @PrimaryGeneratedColumn()
  like_id: number;

  @ManyToOne(() => User, (user) => user.userLikes)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

import { User } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  follow_id: number;

  @ManyToOne(() => User, (user) => user.follows)
  @JoinColumn({ name: 'follwer_id' })
  user: User;

  @ManyToOne(() => User, (user) => user.follows)
  @JoinColumn({ name: 'following_id' })
  following: User;
}

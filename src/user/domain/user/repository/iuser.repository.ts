import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { User } from '../user';

export interface IUserRepository {
  findByAccount: (account: string) => Promise<User>;
  findByEmail: (email: string) => Promise<UserEntity>;
  save: (account: string, nickname: string, email: string) => Promise<UserEntity>;
  update: (is_party: boolean, meeting_type, meeting_week, meeting_time, mbti) => Promise<void>;
}
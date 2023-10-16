import { UserEntity } from '../../infra/db/entity/user.entity';
import { User } from '../user';

export interface IUserRepository {
  findByAccount: (account: string) => Promise<User>;
  findByNcikname: (nickname: string) => Promise<User>;
  findByEmail: (email: string) => Promise<User>;
  save: (account: string, nickname: string, email: string) => Promise<UserEntity>;
  update: (is_party, meeting_type, meeting_week, meeting_time, mbti) => Promise<void>;
}

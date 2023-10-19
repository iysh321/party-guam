import { UserEntity } from '../../infra/db/entity/user.entity';

export interface IUserRepository {
  findByAccount: (account: string) => Promise<UserEntity>;
  findByNcikname: (nickname: string) => Promise<UserEntity>;
  findByEmail: (email: string) => Promise<UserEntity>;
  save: (account: string, nickname: string, email: string) => Promise<UserEntity>;
  update: (is_party: boolean, meeting_type, meeting_week, meeting_time, mbti) => Promise<void>;
}

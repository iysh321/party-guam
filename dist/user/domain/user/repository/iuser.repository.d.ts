import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { User } from '../user';
export interface IUserRepository {
    findByAccount: (account: string) => Promise<User>;
    create: (account: string, nickname: string, email: string) => Promise<UserEntity>;
    update: (is_party: boolean, meeting_type: any, meeting_week: any, meeting_time: any, mbti: any) => Promise<void>;
}

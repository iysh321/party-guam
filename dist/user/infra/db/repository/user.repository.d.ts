import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserFactory } from 'src/user/domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { User } from 'src/user/domain/user/user';
export declare class UserRepository implements IUserRepository {
    readonly dataSource: DataSource;
    private userRepository;
    private userFactory;
    constructor(dataSource: DataSource, userRepository: Repository<UserEntity>, userFactory: UserFactory);
    findByAccount(account: string): Promise<User>;
    create(account: string, nickname: string, email: string): Promise<UserEntity>;
    update(is_party: any, meeting_type: any, meeting_week: any, meeting_time: any, mbti: any): Promise<void>;
}

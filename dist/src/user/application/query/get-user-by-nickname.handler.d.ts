import { IQueryHandler } from '@nestjs/cqrs';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';
import { UserByNicknameQuery } from './get-user-by-nickname.query';
export declare class UserByNicknameHandler implements IQueryHandler<UserByNicknameQuery> {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute(query: UserByNicknameQuery): Promise<UserEntity>;
}

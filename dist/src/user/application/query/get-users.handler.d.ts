import { IQueryHandler } from '@nestjs/cqrs';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';
import { GetUsersQuery } from './get-users.query';
export declare class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute(query: GetUsersQuery): Promise<[UserEntity[], number]>;
}

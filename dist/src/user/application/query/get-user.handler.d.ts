import { IQueryHandler } from '@nestjs/cqrs';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';
import { GetUserQuery } from './get-user.query';
export declare class GetUserHandler implements IQueryHandler<GetUserQuery> {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute(query: GetUserQuery): Promise<UserEntity>;
}

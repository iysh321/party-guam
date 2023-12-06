import { IQueryHandler } from '@nestjs/cqrs';
import { FollowEntity } from 'src/user/infra/db/entity/follow.entity';
import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';
import { GetFollowQuery } from './get-follow.query';
export declare class GetFollowHandler implements IQueryHandler<GetFollowQuery> {
    private userRepository;
    private followRepository;
    constructor(userRepository: Repository<UserEntity>, followRepository: Repository<FollowEntity>);
    execute(query: GetFollowQuery): Promise<{
        [x: string]: any;
        followerCount: any;
        followingCount: any;
    }>;
}

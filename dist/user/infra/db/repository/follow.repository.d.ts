import { DataSource, Repository } from 'typeorm';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { FollowEntity } from '../entity/follow.entity';
import { Follow } from 'src/user/domain/follow/follow';
import { FollowFactory } from 'src/user/domain/follow/follow.factory';
import { UserEntity } from '../entity/user.entity';
export declare class FollowRepository implements IFollowRepository {
    readonly dataSource: DataSource;
    private followRepository;
    private userRepository;
    private followFactory;
    constructor(dataSource: DataSource, followRepository: Repository<FollowEntity>, userRepository: Repository<UserEntity>, followFactory: FollowFactory);
    create(nickname: string, followingId: number): Promise<Follow>;
}

import { DataSource, Repository } from 'typeorm';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { FollowEntity } from '../entity/follow.entity';
import { Follow } from 'src/user/domain/follow/follow';
import { FollowFactory } from 'src/user/domain/follow/follow.factory';
export declare class FollowRepository implements IFollowRepository {
    readonly dataSource: DataSource;
    private followRepository;
    private followFactory;
    constructor(dataSource: DataSource, followRepository: Repository<FollowEntity>, followFactory: FollowFactory);
    create(userId: number, followingId: number): Promise<Follow>;
}

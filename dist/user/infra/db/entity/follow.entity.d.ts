import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class FollowEntity {
    id: number;
    followerId: number;
    followingId: number;
    follower: UserEntity;
    following: UserEntity;
}

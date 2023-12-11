import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class FollowEntity {
    id: number;
    userId: number;
    followId: number;
    createdAt: Date;
    follower: UserEntity;
    following: UserEntity;
}

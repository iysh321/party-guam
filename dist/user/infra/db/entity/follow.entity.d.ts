import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class FollowEntity {
    id: number;
    user: UserEntity;
    following: UserEntity;
}

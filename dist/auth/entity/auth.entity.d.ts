import { UserEntity } from 'src/user/infra/db/entity/user.entity';
export declare class AuthEntity {
    userId: number;
    refreshToken: string;
    updatedAt: Date;
    user: UserEntity;
}

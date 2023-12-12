import { DataSource, Repository } from 'typeorm';
import { AuthEntity } from '../entity/auth.entity';
export declare class AuthRepository {
    readonly dataSource: DataSource;
    private authRepository;
    constructor(dataSource: DataSource, authRepository: Repository<AuthEntity>);
    findByAccount(userId: number): Promise<AuthEntity>;
    findRefreshToken(userId: number, refreshToken: string): Promise<AuthEntity>;
    saveRefreshToken(userId: number, refreshToken: string): Promise<{
        userId: number;
        refreshToken: string;
    } & AuthEntity>;
}

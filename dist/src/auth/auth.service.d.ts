import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
export declare class AuthService {
    private jwtService;
    private authRepository;
    private readonly algorithm;
    private key;
    private iv;
    constructor(jwtService: JwtService, authRepository: AuthRepository);
    createAccessToken(id: string): Promise<string>;
    createRefreshToken(id: string): Promise<string>;
    findRefreshToken(userId: number, refreshToken: string): Promise<import("./entity/auth.entity").AuthEntity>;
    saveRefreshToken(id: number, token: string): Promise<void>;
    encrypt(data: string): Promise<string>;
    decrypt(encryptedData: string): string;
}

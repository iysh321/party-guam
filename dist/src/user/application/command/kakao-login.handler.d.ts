import { ICommandHandler } from '@nestjs/cqrs';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { AuthService } from 'src/auth/auth.service';
import { KakaoLoginCommand } from './kakao-login.command';
export declare class KakaoLoginHandler implements ICommandHandler<KakaoLoginCommand> {
    private userRepository;
    private authService;
    constructor(userRepository: IUserRepository, authService: AuthService);
    execute({ access_token }: KakaoLoginCommand): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}

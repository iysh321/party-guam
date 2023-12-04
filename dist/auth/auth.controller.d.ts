import { AuthService } from './auth.service';
import { DecodedPayload } from './jwt.payload';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    refreshTokens(authorization: string, account: DecodedPayload): Promise<{
        accessToken: string;
    }>;
}

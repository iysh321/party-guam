import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { DecodedPayload } from './jwt.payload';
declare const AccessStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessStrategy extends AccessStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: {
        id: string;
        iat: number;
        exp: number;
    }): Promise<DecodedPayload>;
}
export {};

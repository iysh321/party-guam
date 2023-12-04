import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { DecodedPayload } from './jwt.payload';
declare const RefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshStrategy extends RefreshStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: {
        id: string;
        iat: number;
        exp: number;
    }): Promise<DecodedPayload>;
}
export {};

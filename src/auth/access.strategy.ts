import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(token: { id: string; iat: number; exp: number }) {
    if (token) {
      const id = this.authService.decrypt(token.id);
      return { id }; // request.user
    } else {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}

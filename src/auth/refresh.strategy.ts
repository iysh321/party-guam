import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(token: { id: string; iat: number; exp: number }) {
    if (token) {
      const id = Number(this.authService.decrypt(token.id));

      return { id }; // request.user
    } else {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}

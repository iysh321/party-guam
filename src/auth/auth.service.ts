import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Dependencies(JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;

  constructor(jwtService) {
    this.jwtService = jwtService;
  }

  async login(account: string) {
    const payload = { username: account };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

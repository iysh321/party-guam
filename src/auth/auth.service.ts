import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Dependencies(JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;

  constructor(jwtService) {
    this.jwtService = jwtService;
  }

  async login(id: number, account: string) {
    const payload = { id, account };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

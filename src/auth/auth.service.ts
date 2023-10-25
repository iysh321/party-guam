import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './jwt.payload';

@Dependencies(JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;

  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  async login(id: number) {
    const payload: Payload = { id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

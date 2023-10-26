import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './jwt.payload';
import * as crypto from 'crypto';

@Dependencies(JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;
  private readonly algorithm = 'aes-192-cbc';
  private key = Buffer.from(process.env.CIPHERIV_KEY_SECRET, 'hex');
  private iv = Buffer.from(process.env.CIPHERIV_IV_SECRET, 'hex');
  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  async login(id: string) {
    const payload: Payload = { id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async encrypt(data: string) {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let result = cipher.update(data, 'utf-8', 'base64');
    result += cipher.final('base64');
    return result;
  }

  public decrypt(encryptedData: string): string {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
  }
}

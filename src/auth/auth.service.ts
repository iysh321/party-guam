import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './jwt.payload';
import * as crypto from 'crypto';
import { AuthRepository } from './repository/auth.repository';

@Injectable()
export class AuthService {
  private readonly algorithm: string = 'aes-192-cbc';
  private key: Buffer = Buffer.from(process.env.CIPHERIV_KEY_SECRET, 'hex');
  private iv = Buffer.from(process.env.CIPHERIV_IV_SECRET, 'hex');
  constructor(
    private jwtService: JwtService,
    private authRepository: AuthRepository,
  ) {}

  async createAccessToken(id: string) {
    const payload: Payload = { id };
    return this.jwtService.signAsync(payload, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '30d' });
  }

  async createRefreshToken(id: string) {
    const payload: Payload = { id };
    return this.jwtService.signAsync(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '15m' });
  }

  async saveRefreshToken(id: number, token: string) {
    this.authRepository.saveRefreshToken(id, token);
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

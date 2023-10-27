import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshStrategy } from './refresh.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(RefreshStrategy)
  @Post('refresh-token')
  async refreshTokens(@Body() refreshRequest: { refreshToken: string }) {
    const { refreshToken } = refreshRequest;
    return this.authService.createRefreshToken(refreshToken);
  }
}

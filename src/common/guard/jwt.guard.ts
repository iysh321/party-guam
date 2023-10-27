import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshJwtAuthGuard extends AuthGuard('access') {}

@Injectable()
export class AccessJwtAuthGuard extends AuthGuard('refresh') {}

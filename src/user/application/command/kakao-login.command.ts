import { ICommand } from '@nestjs/cqrs';

export class KakaoLoginCommand implements ICommand {
  constructor(readonly access_token: string) {}
}

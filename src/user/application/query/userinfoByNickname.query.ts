import { IQuery } from '@nestjs/cqrs';

export class userInfoByNicknameQuery implements IQuery {
  constructor(readonly nickname: string) {}
}

import { ICommand } from '@nestjs/cqrs';

export class CreateFollowCommand implements ICommand {
  constructor(
    readonly nickname: string,
    readonly followingId: number,
  ) {}
}

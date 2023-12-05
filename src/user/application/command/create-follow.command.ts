import { ICommand } from '@nestjs/cqrs';

export class CreateFollowCommand implements ICommand {
  constructor(
    readonly userId: number,
    readonly nickname: string,
  ) {}
}

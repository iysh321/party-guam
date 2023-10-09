import { ICommand } from '@nestjs/cqrs';

export class LoginCommand implements ICommand {
  constructor(
    readonly account: string,
    readonly password: string,
  ) {}
}

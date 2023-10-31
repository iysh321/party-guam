import { ICommand } from '@nestjs/cqrs';

export class CreateAccessCommand implements ICommand {
  constructor(
    readonly id : string
    readonly refreshToken: string) {}
}

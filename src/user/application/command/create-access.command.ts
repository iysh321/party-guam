import { ICommand } from '@nestjs/cqrs';

export class CreateAccessCommand implements ICommand {
  constructor(readonly refreshToken: string) {}
}

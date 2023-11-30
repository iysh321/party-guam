import { ICommand } from '@nestjs/cqrs';

export class CreatePartyCommand implements ICommand {
  constructor(
    readonly title: string,
    readonly contents: string,
  ) {}
}

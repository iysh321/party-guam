import { ICommand } from '@nestjs/cqrs';

export class UpdateUserCommand implements ICommand {
  constructor(
    readonly is_party: boolean,
    readonly meeting_type: string,
    readonly meeting_week: string,
    readonly meeting_time: string,
    readonly mbti: string,
  ) {}
}

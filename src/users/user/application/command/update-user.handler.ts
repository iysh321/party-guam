import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserFactory } from '../../domain/user.factory';
import { IUserRepository } from 'src/users/user/domain/repository/iuser.repository';
import { UpdateUserCommand } from './update-user.command';

@Injectable()
@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private userFactory: UserFactory,
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(command: UpdateUserCommand) {
    const { is_party, meeting_type, meeting_week, meeting_time, mbti } = command;

    await this.userRepository.update(is_party, meeting_type, meeting_week, meeting_time, mbti);
  }
}

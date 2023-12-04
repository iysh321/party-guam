import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserFactory } from '../../domain/user/user.factory';
import { CreateFollowCommand } from './create-follow.command';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';

@Injectable()
@CommandHandler(CreateFollowCommand)
export class CreateFollowHandler implements ICommandHandler<CreateFollowCommand> {
  constructor(
    private userFactory: UserFactory,
    @Inject('FollowRepository') private followRepository: IFollowRepository,
  ) {}

  async execute(command: CreateFollowCommand) {
    const { nickname, followingId } = command;
    this.followRepository.create(nickname, followingId);
    const save = await this.followRepository.create(nickname, followingId);

    return save;
  }
}

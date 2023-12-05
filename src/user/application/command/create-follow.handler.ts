import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserFactory } from '../../domain/user/user.factory';
import { CreateFollowCommand } from './create-follow.command';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';

@Injectable()
@CommandHandler(CreateFollowCommand)
export class CreateFollowHandler implements ICommandHandler<CreateFollowCommand> {
  constructor(
    private userFactory: UserFactory,
    @Inject('FollowRepository') private followRepository: IFollowRepository,
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(command: CreateFollowCommand) {
    const { userId, nickname } = command;

    const followUser = await this.userRepository.findByAccount(nickname);

    await this.followRepository.create(userId, followUser.id);
    const save = await this.followRepository.create(userId, followUser.id);

    return save;
  }
}

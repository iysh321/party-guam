import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { CreateAccessCommand } from './create-access.command';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
@CommandHandler(CreateAccessCommand)
export class CreateUserHandler implements ICommandHandler<CreateAccessCommand> {
  constructor(
    private userFactory: UserFactory,
    @Inject('UserRepository')
    private userRepository: IUserRepository,
    private authService: AuthService,
  ) {}

  async execute(command: CreateAccessCommand) {
    const { refreshToken } = command;

    const save = await this.userRepository.save(account, nickname, email);

    return save;
  }
}

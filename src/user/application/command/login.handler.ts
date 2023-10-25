import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { AuthService } from 'src/auth/auth.service';
import { LoginCommand } from './login.command';

@Injectable()
@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    private authService: AuthService,
  ) {}

  async execute(command: LoginCommand) {
    const { account } = command;

    const user = await this.userRepository.findByAccount(account);
    if (user === null) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return await this.authService.login(user.getId());
  }
}

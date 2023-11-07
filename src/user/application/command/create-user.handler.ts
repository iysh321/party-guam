import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private userFactory: UserFactory,
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(command: CreateUserCommand) {
    const { account, nickname, email } = command;

    const verify = await this.userRepository.findByEmail(email);
    if (verify !== null) {
      throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
    }

    const save = await this.userRepository.save(account, nickname, email);

    this.userFactory.create(save.id, account, email, email);

    return save;
  }
}
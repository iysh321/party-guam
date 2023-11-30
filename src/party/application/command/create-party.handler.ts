import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { CreatePartyCommand } from './create-party.comand';
import { PartyFactory } from 'src/party/domain/party.factory';

@Injectable()
@CommandHandler(CreatePartyCommand)
export class CreateUserHandler implements ICommandHandler<CreatePartyCommand> {
  constructor(
    private partyFactory: PartyFactory,
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(command: CreatePartyCommand) {
    const { title, contents } = command;

    // const save = await this.userRepository.create(account, nickname, email);

    // this.partyFactory.create(save.id, title, contents);

    // return save;
  }
}

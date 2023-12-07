import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreatePartyCommand } from './create-party.comand';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iPartyrepository';

@Injectable()
@CommandHandler(CreatePartyCommand)
export class CreatePartyHandler implements ICommandHandler<CreatePartyCommand> {
  constructor(
    private partyFactory: PartyFactory,
    @Inject('PartyRepository') private partyRepository: IPartyRepository,
  ) {}

  async execute(command: CreatePartyCommand) {
    const { userId, title, content } = command;

    const save = await this.partyRepository.create(userId, title, content);

    this.partyFactory.create(save.id, title, content);

    return save;
  }
}

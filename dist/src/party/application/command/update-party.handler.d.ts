import { ICommandHandler } from '@nestjs/cqrs';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iParty.repository';
import { IPartyUserRepository } from 'src/party/domain/party/repository/iPartyUser.repository';
import { UpdatePartyCommand } from './update-party.comand';
export declare class UpdatePartyHandler implements ICommandHandler<UpdatePartyCommand> {
    private partyFactory;
    private partyRepository;
    private partyUserRepository;
    constructor(partyFactory: PartyFactory, partyRepository: IPartyRepository, partyUserRepository: IPartyUserRepository);
    execute(command: UpdatePartyCommand): Promise<void>;
}

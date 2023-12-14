import { ICommandHandler } from '@nestjs/cqrs';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iParty.repository';
import { IPartyUserRepository } from 'src/party/domain/party/repository/iPartyUser.repository';
import { DeletePartyCommand } from './delete-party.comand';
export declare class DeletePartyHandler implements ICommandHandler<DeletePartyCommand> {
    private partyFactory;
    private partyRepository;
    private partyUserRepository;
    constructor(partyFactory: PartyFactory, partyRepository: IPartyRepository, partyUserRepository: IPartyUserRepository);
    execute(command: DeletePartyCommand): Promise<void>;
}

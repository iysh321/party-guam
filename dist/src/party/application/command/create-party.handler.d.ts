import { ICommandHandler } from '@nestjs/cqrs';
import { CreatePartyCommand } from './create-party.comand';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iParty.repository';
import { IPartyUserRepository } from 'src/party/domain/party/repository/iPartyUser.repository';
export declare class CreatePartyHandler implements ICommandHandler<CreatePartyCommand> {
    private partyFactory;
    private partyRepository;
    private partyUserRepository;
    constructor(partyFactory: PartyFactory, partyRepository: IPartyRepository, partyUserRepository: IPartyUserRepository);
    execute(command: CreatePartyCommand): Promise<import("../../domain/party/party").Party>;
}

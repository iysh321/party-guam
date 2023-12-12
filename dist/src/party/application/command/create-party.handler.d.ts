import { ICommandHandler } from '@nestjs/cqrs';
import { CreatePartyCommand } from './create-party.comand';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iPartyrepository';
export declare class CreatePartyHandler implements ICommandHandler<CreatePartyCommand> {
    private partyFactory;
    private partyRepository;
    constructor(partyFactory: PartyFactory, partyRepository: IPartyRepository);
    execute(command: CreatePartyCommand): Promise<import("../../domain/party/party").Party>;
}

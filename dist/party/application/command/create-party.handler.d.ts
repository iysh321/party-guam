import { ICommandHandler } from '@nestjs/cqrs';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { CreatePartyCommand } from './create-party.comand';
import { PartyFactory } from 'src/party/domain/party.factory';
export declare class CreateUserHandler implements ICommandHandler<CreatePartyCommand> {
    private partyFactory;
    private userRepository;
    constructor(partyFactory: PartyFactory, userRepository: IUserRepository);
    execute(command: CreatePartyCommand): Promise<void>;
}

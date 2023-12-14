import { ICommandHandler } from '@nestjs/cqrs';
import { DeletePartyLikeCommand } from './delete-party-like.comand';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyRepository } from 'src/party/domain/party/repository/iParty.repository';
import { IPartyLikeRepository } from 'src/party/domain/party/repository/iPartyLike.repository';
export declare class DeletePartyLikeHandler implements ICommandHandler<DeletePartyLikeCommand> {
    private partyFactory;
    private partyRepository;
    private partyLikeRepository;
    constructor(partyFactory: PartyFactory, partyRepository: IPartyRepository, partyLikeRepository: IPartyLikeRepository);
    execute(command: DeletePartyLikeCommand): Promise<void>;
}

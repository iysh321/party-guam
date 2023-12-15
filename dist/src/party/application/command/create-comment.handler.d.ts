import { ICommandHandler } from '@nestjs/cqrs';
import { CreateCommentCommand } from './create-comment.comand';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyCommentRepository } from 'src/party/domain/party/repository/iPartyComment.repository';
export declare class CreateCommentHandler implements ICommandHandler<CreateCommentCommand> {
    private partyFactory;
    private partyCommentRepository;
    constructor(partyFactory: PartyFactory, partyCommentRepository: IPartyCommentRepository);
    execute(command: CreateCommentCommand): Promise<void>;
}

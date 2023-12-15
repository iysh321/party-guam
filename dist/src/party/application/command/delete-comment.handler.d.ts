import { ICommandHandler } from '@nestjs/cqrs';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyCommentRepository } from 'src/party/domain/party/repository/iPartyComment.repository';
import { DeleteCommentCommand } from './delete-comment.comand';
export declare class UpdateCommentHandler implements ICommandHandler<DeleteCommentCommand> {
    private partyFactory;
    private partyCommentRepository;
    constructor(partyFactory: PartyFactory, partyCommentRepository: IPartyCommentRepository);
    execute(command: DeleteCommentCommand): Promise<void>;
}

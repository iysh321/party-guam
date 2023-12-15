import { ICommandHandler } from '@nestjs/cqrs';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { IPartyCommentRepository } from 'src/party/domain/party/repository/iPartyComment.repository';
import { UpdateCommentCommand } from './update-comment.comand';
export declare class UpdateCommentHandler implements ICommandHandler<UpdateCommentCommand> {
    private partyFactory;
    private partyCommentRepository;
    constructor(partyFactory: PartyFactory, partyCommentRepository: IPartyCommentRepository);
    execute(command: UpdateCommentCommand): Promise<void>;
}

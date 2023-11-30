import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePartyRequestDto } from './dto/create-party.request.dto';
import { UpdatePartyRequestDto } from './dto/update-party.request.dto';
import { PartyRequestDto } from './dto/party.request.dto';
import { PartyCommentRequestDto } from './dto/party-comment.request.dto';
export declare class PartyController {
    private commandBus;
    private queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createParty(dto: CreatePartyRequestDto): Promise<void>;
    updateParty(dto: UpdatePartyRequestDto): Promise<void>;
    deleteParty(dto: PartyRequestDto): Promise<void>;
    createPartyToLike(partyId: number): Promise<void>;
    deletePartyToLike(partyId: number): Promise<void>;
    createPartyComment(partyId: number, dto: PartyCommentRequestDto): Promise<void>;
    updatePartyComment(commentId: number, dto: PartyCommentRequestDto): Promise<void>;
    deletePartyComment(commentId: number, dto: UpdatePartyRequestDto): Promise<void>;
    sendPartyRequest(commentId: number): Promise<void>;
    sendPartyInvite(commentId: number, nickname: string, dto: PartyRequestDto): Promise<void>;
    transferPartyLeadership(commentId: number, dto: CreatePartyRequestDto): Promise<void>;
}

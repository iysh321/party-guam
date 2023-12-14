import { ICommand } from '@nestjs/cqrs';
export declare class DeletePartyLikeCommand implements ICommand {
    readonly userId: number;
    readonly partyId: number;
    constructor(userId: number, partyId: number);
}

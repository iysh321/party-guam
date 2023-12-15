import { ICommand } from '@nestjs/cqrs';
export declare class CreateCommentCommand implements ICommand {
    readonly userId: number;
    readonly partyId: number;
    readonly comment: string;
    constructor(userId: number, partyId: number, comment: string);
}
